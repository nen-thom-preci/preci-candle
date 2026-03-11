import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { emailHtmlTemplate } from './template'; // Import giao diện HTML đã gắn biến {{ }}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { customerEmail, customerName, customerPhone, customerAddress, orderId, finalTotal, cartItems } = data;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Xử lý danh sách sản phẩm động (Khách mua bao nhiêu món sẽ tự tạo bấy nhiêu dòng)
        const itemsListHtml = cartItems.map((item: any) =>
            `${item.name} (x${item.qty})`
        ).join('<br/>'); // Mỗi sản phẩm sẽ tự xuống dòng

        // Lắp dữ liệu thật vào các biến {{ }} trong HTML
        let finalHtml = emailHtmlTemplate
            .replace('{{CUSTOMER_NAME}}', customerName)
            .replace('{{CUSTOMER_PHONE}}', customerPhone)
            .replace('{{CUSTOMER_ADDRESS}}', customerAddress)
            .replace('{{ORDER_ID}}', orderId)
            .replace('{{FINAL_TOTAL}}', `${finalTotal.toLocaleString('vi-VN')} VNĐ`)
            .replace('{{ORDER_ITEMS}}', itemsListHtml);

        // Thực hiện gửi mail
        const info = await transporter.sendMail({
            from: `"Préci Candle" <${process.env.SMTP_USER}>`,
            to: customerEmail,
            bcc: process.env.PROFESSOR_EMAIL, // BCC cho thầy giáo
            subject: `[Préci] Xác nhận đơn hàng #${orderId} thành công`,
            html: finalHtml,
        });

        return NextResponse.json({ success: true, messageId: info.messageId });
    } catch (error) {
        console.error("Lỗi gửi mail:", error);
        return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
    }
}