export const emailHtmlTemplate = `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <!--[if gte mso 15]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>*|MC:SUBJECT|*</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <style>
        img {
            -ms-interpolation-mode: bicubic;
        }

        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        .mceStandardButton,
        .mceStandardButton td,
        .mceStandardButton td a {
            mso-hide: all !important;
        }

        p,
        a,
        li,
        td,
        blockquote {
            mso-line-height-rule: exactly;
        }

        p,
        a,
        li,
        td,
        body,
        table,
        blockquote {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        .mcnPreviewText {
            display: none !important;
        }

        .bodyCell {
            margin: 0 auto;
            padding: 0;
            width: 100%;
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass td,
        .ExternalClass div,
        .ExternalClass span,
        .ExternalClass font {
            line-height: 100%;
        }

        .ReadMsgBody,
        .ExternalClass {
            width: 100%;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        body {
            height: 100%;
            margin: 0;
            padding: 0;
            width: 100%;
            background: #ffffff;
        }

        p {
            margin: 0;
            padding: 0;
        }

        table {
            border-collapse: collapse;
        }

        td,
        p,
        a {
            word-break: break-word;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            display: block;
            margin: 0;
            padding: 0;
        }

        img,
        a img {
            border: 0;
            height: auto;
            outline: none;
            text-decoration: none;
        }

        a[href^="tel"],
        a[href^="sms"] {
            color: inherit;
            cursor: default;
            text-decoration: none;
        }

        .mceColumn .mceButtonLink,
        .mceColumn-1 .mceButtonLink,
        .mceColumn-2 .mceButtonLink,
        .mceColumn-3 .mceButtonLink,
        .mceColumn-4 .mceButtonLink {
            min-width: 30px;
        }

        div[contenteditable="true"] {
            outline: 0;
        }

        .mceImageBorder {
            display: inline-block;
        }

        .mceImageBorder img {
            border: 0 !important;
        }

        body,
        #bodyTable {
            background-color: rgb(244, 244, 244);
        }

        .mceText,
        .mcnTextContent,
        .mceLabel {
            font-family: "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif;
        }

        .mceText,
        .mcnTextContent,
        .mceLabel {
            color: rgb(0, 0, 0);
        }

        .mceText h2,
        .mceText h3,
        .mceText h4,
        .mceText p,
        .mceText ul,
        .mceText label,
        .mceText input {
            margin-bottom: 0;
        }

        .mceSpacing-24 .mceInput+.mceErrorMessage {
            margin-top: -12px;
        }

        .mceInput {
            background-color: transparent;
            border: 2px solid rgb(208, 208, 208);
            width: 60%;
            color: rgb(77, 77, 77);
            display: block;
        }

        .mceInput[type="radio"],
        .mceInput[type="checkbox"] {
            float: left;
            margin-right: 12px;
            display: inline;
            width: auto !important;
        }

        .mceLabel>.mceInput {
            margin-bottom: 0;
            margin-top: 2px;
        }

        .mceLabel {
            display: block;
        }

        .mceText p,
        .mcnTextContent p {
            color: rgb(0, 0, 0);
            font-family: "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif;
            font-size: 16px;
            font-weight: normal;
            line-height: 1.5;
            mso-line-height-alt: 150%;
            text-align: center;
            letter-spacing: 0;
            direction: ltr;
            margin: 0;
        }

        .mceText h2,
        .mcnTextContent h2 {
            color: rgb(0, 0, 0);
            font-family: "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif;
            font-size: 25px;
            font-weight: bold;
            line-height: 1.5;
            mso-line-height-alt: 150%;
            text-align: center;
            letter-spacing: 0;
            direction: ltr;
        }

        .mceText h3,
        .mcnTextContent h3 {
            color: rgb(0, 0, 0);
            font-family: "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif;
            font-size: 20px;
            font-weight: bold;
            line-height: 1.5;
            mso-line-height-alt: 150%;
            text-align: center;
            letter-spacing: 0;
            direction: ltr;
        }

        .mceText h4,
        .mcnTextContent h4 {
            color: rgb(0, 0, 0);
            font-family: "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif;
            font-size: 16px;
            font-weight: bold;
            line-height: 1.5;
            mso-line-height-alt: 150%;
            text-align: center;
            letter-spacing: 0;
            direction: ltr;
        }

        .mceText a,
        .mcnTextContent a {
            color: rgb(0, 0, 0);
            font-style: normal;
            font-weight: normal;
            text-decoration: underline;
            direction: ltr;
        }

        p.mcePastedContent,
        h1.mcePastedContent,
        h2.mcePastedContent,
        h3.mcePastedContent,
        h4.mcePastedContent {
            text-align: left;
        }

        @media only screen and (max-width: 480px) {

            body,
            table,
            td,
            p,
            a,
            li,
            blockquote {
                -webkit-text-size-adjust: none !important;
            }

            body {
                width: 100% !important;
                min-width: 100% !important;
            }

            body.mobile-native {
                -webkit-user-select: none;
                user-select: none;
                transition: transform 0.2s ease-in;
                transform-origin: top center;
            }

            colgroup {
                display: none;
            }

            .mceLogo img,
            .mceImage img,
            .mceSocialFollowIcon img {
                height: auto !important;
            }

            .mceWidthContainer {
                max-width: 660px !important;
            }

            .mceColumn,
            .mceColumn-2 {
                display: block !important;
                width: 100% !important;
            }

            .mceColumn-forceSpan {
                display: table-cell !important;
                width: auto !important;
            }

            .mceColumn-forceSpan .mceButton a {
                min-width: 0 !important;
            }

            .mceReverseStack {
                display: table;
                width: 100%;
            }

            .mceColumn-1 {
                display: table-footer-group;
                width: 100% !important;
            }

            .mceColumn-3 {
                display: table-header-group;
                width: 100% !important;
            }

            .mceColumn-4 {
                display: table-caption;
                width: 100% !important;
            }

            .mceKeepColumns .mceButtonLink {
                min-width: 0;
            }

            .mceBlockContainer,
            .mceSpacing-24 {
                padding-right: 16px !important;
                padding-left: 16px !important;
            }

            .mceBlockContainerE2E {
                padding-right: 0;
                padding-left: 0;
            }

            .mceImage,
            .mceLogo {
                width: 100% !important;
                height: auto !important;
            }

            .mceText img {
                max-width: 100% !important;
            }

            .mceFooterSection .mceText,
            .mceFooterSection .mceText p {
                font-size: 16px !important;
                line-height: 140% !important;
            }

            .mceText p {
                margin: 0;
                font-size: 16px !important;
                line-height: 1.5 !important;
                mso-line-height-alt: 150%;
            }

            .mceText h2 {
                font-size: 25px !important;
                line-height: 1.5 !important;
                mso-line-height-alt: 150%;
            }

            .mceText h3 {
                font-size: 20px !important;
                line-height: 1.5 !important;
                mso-line-height-alt: 150%;
            }

            .mceText h4 {
                font-size: 16px !important;
                line-height: 1.5 !important;
                mso-line-height-alt: 150%;
            }

            .bodyCell {
                padding-left: 16px !important;
                padding-right: 16px !important;
            }

            .mceButtonContainer {
                width: fit-content !important;
                max-width: fit-content !important;
            }

            .mceButtonLink {
                padding: 18px 28px !important;
                font-size: 16px !important;
            }

            .mceDividerContainer {
                width: 100% !important;
            }

            #b5 .mceTextBlockContainer,
            #b19,
            #b20 .mceTextBlockContainer,
            #b24 .mceTextBlockContainer,
            #b29 .mceTextBlockContainer,
            #b34 .mceTextBlockContainer,
            #b37 .mceTextBlockContainer,
            #b41,
            #b42 .mceTextBlockContainer,
            #b50 .mceTextBlockContainer,
            #b51 .mceTextBlockContainer,
            #b59 .mceTextBlockContainer,
            #b60 .mceTextBlockContainer,
            #b61,
            #b70 .mceTextBlockContainer,
            #b71 .mceTextBlockContainer,
            #b72 .mceTextBlockContainer,
            #b73 .mceTextBlockContainer,
            #b74 .mceTextBlockContainer,
            #b75 .mceTextBlockContainer,
            #b76 .mceTextBlockContainer,
            #b77 .mceTextBlockContainer,
            #b78 .mceTextBlockContainer,
            #b79 .mceTextBlockContainer,
            #b80 .mceTextBlockContainer,
            #b81 .mceTextBlockContainer,
            #b82 .mceTextBlockContainer,
            #b83 .mceTextBlockContainer,
            #b84 .mceTextBlockContainer,
            #b85 .mceTextBlockContainer {
                padding: 12px 24px !important;
            }

            #gutterContainerId-5,
            #gutterContainerId-20,
            #gutterContainerId-24,
            #gutterContainerId-29,
            #gutterContainerId-34,
            #gutterContainerId-37,
            #gutterContainerId-42,
            #gutterContainerId-50,
            #gutterContainerId-51,
            #gutterContainerId-59,
            #gutterContainerId-60,
            #gutterContainerId-70,
            #gutterContainerId-71,
            #gutterContainerId-72,
            #gutterContainerId-73,
            #gutterContainerId-74,
            #gutterContainerId-75,
            #gutterContainerId-76,
            #gutterContainerId-77,
            #gutterContainerId-78,
            #gutterContainerId-79,
            #gutterContainerId-80,
            #gutterContainerId-81,
            #gutterContainerId-82,
            #gutterContainerId-83,
            #gutterContainerId-84,
            #gutterContainerId-85 {
                padding: 0 !important;
            }

            #b8 .mceDividerBlock {
                border-top-width: 2px !important;
            }

            #b8 {
                padding: 20px 24px !important;
            }

            #b19 table,
            #b36 table,
            #b41 table,
            #b44 table,
            #b61 table {
                margin-left: auto !important;
                margin-right: auto !important;
                float: none !important;
            }

            #b36,
            #b44,
            #b58 {
                padding: 12px 16px !important;
            }

            #b58 table {
                float: none !important;
                margin: 0 auto !important;
            }

            #b58 .mceButtonLink {
                padding-top: 16px !important;
                padding-bottom: 16px !important;
                font-size: 19px !important;
            }
        }

        @media only screen and (max-width: 640px) {
            .mceClusterLayout td {
                padding: 4px !important;
            }
        }
    </style>
</head>

<body>
    <!--*|IF:MC_PREVIEW_TEXT|*-->
    <!--[if !gte mso 9]><!----><span class="mcnPreviewText"
        style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">*|MC_PREVIEW_TEXT|*</span><!--<![endif]-->
    <!--*|END:IF|*-->
    <div style="display: none; max-height: 0px; overflow: hidden;">͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌  
          ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌  
          ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌  
          ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌  
          ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌  
          ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌  
          ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌  
          ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌  
          ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌  
          ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌  
          ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌  
          ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌  
          ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌  
          ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌  
          ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌  
          ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌  
          ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌  
          ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌  
          ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌  
          ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌  
          ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌  
          ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌  
          ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌  
          ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌     ͏ ‌    ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­
        ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­
        ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­
        ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­
        ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­
        ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­</div><!--MCE_TRACKING_PIXEL-->
    <center>
        <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable" role="presentation"
            style="background-color: rgb(244, 244, 244);">
            <tbody>
                <tr>
                    <td class="bodyCell" align="center" valign="top">
                        <table id="root" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                            <tbody data-block-id="4" class="mceWrapper">
                                <tr>
                                    <td style="background-color:#dbbfa9" valign="top" align="center"
                                        class="mceSection4">
                                        <!--[if (gte mso 9)|(IE)]><table align="center" border="0" cellspacing="0" cellpadding="0" width="660" style="width:660px;"><tr><td><![endif]-->
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                            style="max-width:660px" role="presentation">
                                            <tbody>
                                                <tr>
                                                    <td style="background-color:#ffffff" valign="top"
                                                        class="mceWrapperInner">
                                                        <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                            width="100%" role="presentation" data-block-id="3">
                                                            <tbody>
                                                                <tr class="mceRow">
                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                        valign="top">
                                                                        <table border="0" cellpadding="0"
                                                                            cellspacing="0" width="100%"
                                                                            role="presentation">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style="padding-top:0;padding-bottom:0"
                                                                                        valign="top" class="mceColumn"
                                                                                        id="mceColumnId--18"
                                                                                        data-block-id="-18" colspan="12"
                                                                                        width="100%">
                                                                                        <table border="0"
                                                                                            cellpadding="0"
                                                                                            cellspacing="0" width="100%"
                                                                                            role="presentation">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="background-color:#715136;padding-top:12px;padding-bottom:12px;padding-right:24px;padding-left:24px;border:0;border-radius:0"
                                                                                                        valign="top"
                                                                                                        class="mceImageBlockContainer"
                                                                                                        align="center"
                                                                                                        id="b19">
                                                                                                        <div>
                                                                                                            <!--[if !mso]><!-->
                                                                                                        </div>
                                                                                                        <table
                                                                                                            align="center"
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            width="100%"
                                                                                                            style="border-collapse:separate;margin:0;vertical-align:top;max-width:100%;width:100%;height:auto"
                                                                                                            role="presentation"
                                                                                                            data-testid="image-19">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="border:0;border-radius:0;margin:0"
                                                                                                                        valign="top">
                                                                                                                        <img alt=""
                                                                                                                            src="https://mcusercontent.com/9ff0301507dcd31784caa6f9c/images/80093acc-33d5-7777-44c3-aabc8906b7d5.png"
                                                                                                                            width="612"
                                                                                                                            height="auto"
                                                                                                                            style="display:block;max-width:100%;height:auto;border-radius:0"
                                                                                                                            class="imageDropZone mceImage"
                                                                                                                            data-block-id="19" />
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                        <div>
                                                                                                            <!--<![endif]-->
                                                                                                        </div>
                                                                                                        <div>
                                                                                                            <!--[if mso]>
<span class="mceImageBorder" style="border:0;border-width:2px;vertical-align:top;margin:0"><img role="presentation" class="imageDropZone mceImage" src="https://mcusercontent.com/9ff0301507dcd31784caa6f9c/images/80093acc-33d5-7777-44c3-aabc8906b7d5.png" alt="" width="612" height="auto" style="display:block;max-width:612px;width:612px;height:auto"/></span>
<![endif]-->
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                        valign="top"
                                                                                                        class="mceGutterContainer"
                                                                                                        id="gutterContainerId-20">
                                                                                                        <table
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            width="100%"
                                                                                                            style="border-collapse:separate"
                                                                                                            role="presentation">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                        valign="top"
                                                                                                                        id="b20">
                                                                                                                        <table
                                                                                                                            width="100%"
                                                                                                                            style="border:0;background-color:#7b8b4c;border-radius:0;border-collapse:separate">
                                                                                                                            <tbody>
                                                                                                                                <tr>
                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                        <div data-block-id="20"
                                                                                                                                            class="mceText"
                                                                                                                                            id="d20"
                                                                                                                                            style="width:100%">
                                                                                                                                            <h4
                                                                                                                                                class="last-child">
                                                                                                                                                <span
                                                                                                                                                    style="color:#ffffff;"><span
                                                                                                                                                        style="font-size: 19px"><span
                                                                                                                                                            style="background-color: transparent">XÁC
                                                                                                                                                            NHẬN
                                                                                                                                                            ĐƠN
                                                                                                                                                            ĐẶT
                                                                                                                                                            HÀNG
                                                                                                                                                            THÀNH
                                                                                                                                                            CÔNG</span></span></span>
                                                                                                                                            </h4>
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </tbody>
                                                                                                                        </table>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td valign="top"
                                                                                                        class="mceGutterContainer"
                                                                                                        id="gutterContainerId-23">
                                                                                                        <table
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            width="100%"
                                                                                                            style="border-collapse:separate"
                                                                                                            role="presentation">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="padding-top:8px;padding-bottom:8px;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                        valign="top"
                                                                                                                        class="mceLayoutContainer"
                                                                                                                        id="b23">
                                                                                                                        <table
                                                                                                                            align="center"
                                                                                                                            border="0"
                                                                                                                            cellpadding="0"
                                                                                                                            cellspacing="0"
                                                                                                                            width="100%"
                                                                                                                            role="presentation"
                                                                                                                            data-block-id="23"
                                                                                                                            id="section_0ff5795e6d6d188d5993c831d9ced179"
                                                                                                                            class="mceLayout">
                                                                                                                            <tbody>
                                                                                                                                <tr
                                                                                                                                    class="mceRow">
                                                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                                                                                        valign="top">
                                                                                                                                        <table
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="0"
                                                                                                                                            width="100%"
                                                                                                                                            role="presentation">
                                                                                                                                            <tbody>
                                                                                                                                                <tr>
                                                                                                                                                    <td valign="top"
                                                                                                                                                        class="mceColumn"
                                                                                                                                                        id="mceColumnId--21"
                                                                                                                                                        data-block-id="-21"
                                                                                                                                                        colspan="12"
                                                                                                                                                        width="100%">
                                                                                                                                                        <table
                                                                                                                                                            border="0"
                                                                                                                                                            cellpadding="0"
                                                                                                                                                            cellspacing="0"
                                                                                                                                                            width="100%"
                                                                                                                                                            role="presentation">
                                                                                                                                                            <tbody>
                                                                                                                                                                <tr>
                                                                                                                                                                    <td style="border:0;border-radius:0"
                                                                                                                                                                        valign="top"
                                                                                                                                                                        align="center"
                                                                                                                                                                        id="b-5">
                                                                                                                                                                        <table
                                                                                                                                                                            align="center"
                                                                                                                                                                            border="0"
                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                            width="100%"
                                                                                                                                                                            role="presentation"
                                                                                                                                                                            data-block-id="-5">
                                                                                                                                                                            <tbody>
                                                                                                                                                                                <tr
                                                                                                                                                                                    class="mceRow">
                                                                                                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                                                                                                                                        valign="top">
                                                                                                                                                                                        <table
                                                                                                                                                                                            border="0"
                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                            width="100%"
                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                <tr>
                                                                                                                                                                                                    <td valign="top"
                                                                                                                                                                                                        class="mceColumn"
                                                                                                                                                                                                        id="mceColumnId--28"
                                                                                                                                                                                                        data-block-id="-28"
                                                                                                                                                                                                        colspan="12"
                                                                                                                                                                                                        width="100%">
                                                                                                                                                                                                        <table
                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                    <td style="border:0;border-radius:0"
                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                        id="b22">
                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                            align="center"
                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                            role="presentation"
                                                                                                                                                                                                                            data-block-id="22">
                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                <tr
                                                                                                                                                                                                                                    class="mceRow">
                                                                                                                                                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                                                                                                                                                                                        valign="top">
                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                            cellspacing="24"
                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0"
                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                        class="mceColumn"
                                                                                                                                                                                                                                                        id="mceColumnId-25"
                                                                                                                                                                                                                                                        data-block-id="25"
                                                                                                                                                                                                                                                        colspan="12"
                                                                                                                                                                                                                                                        width="100%">
                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                        class="mceGutterContainer"
                                                                                                                                                                                                                                                                        id="gutterContainerId-24">
                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                            style="border-collapse:separate"
                                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                                        id="b24">
                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                                            style="border:0;background-color:transparent;border-radius:0;border-collapse:separate">
                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                                                                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                                                                                                                                                                                        <div data-block-id="24"
                                                                                                                                                                                                                                                                                                            class="mceText"
                                                                                                                                                                                                                                                                                                            id="d24"
                                                                                                                                                                                                                                                                                                            style="width:100%">
                                                                                                                                                                                                                                                                                                            <p style="text-align: left;"
                                                                                                                                                                                                                                                                                                                class="last-child">
                                                                                                                                                                                                                                                                                                                Thân
                                                                                                                                                                                                                                                                                                                chào
                                                                                                                                                                                                                                                                                                                bạn,
                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                        class="mceGutterContainer"
                                                                                                                                                                                                                                                                        id="gutterContainerId-50">
                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                            style="border-collapse:separate"
                                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                                        id="b50">
                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                                            style="border:0;background-color:transparent;border-radius:0;border-collapse:separate">
                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                                                                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                                                                                                                                                                                        <div data-block-id="50"
                                                                                                                                                                                                                                                                                                            class="mceText"
                                                                                                                                                                                                                                                                                                            id="d50"
                                                                                                                                                                                                                                                                                                            style="width:100%">
                                                                                                                                                                                                                                                                                                            <p
                                                                                                                                                                                                                                                                                                                style="line-height: 0; mso-line-height-alt: 0%;">
                                                                                                                                                                                                                                                                                                                <br />
                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                            <p
                                                                                                                                                                                                                                                                                                                class="mcePastedContent last-child">
                                                                                                                                                                                                                                                                                                                <span
                                                                                                                                                                                                                                                                                                                    style="color:rgb(0, 0, 0);"><span
                                                                                                                                                                                                                                                                                                                        style="font-size: 13pt"><span
                                                                                                                                                                                                                                                                                                                            style="font-family: 'Times New Roman', serif"><span
                                                                                                                                                                                                                                                                                                                                style="font-weight:normal;"><span
                                                                                                                                                                                                                                                                                                                                    style="background-color: transparent">Chúng
                                                                                                                                                                                                                                                                                                                                    tôi
                                                                                                                                                                                                                                                                                                                                    đã
                                                                                                                                                                                                                                                                                                                                    nhận
                                                                                                                                                                                                                                                                                                                                    được
                                                                                                                                                                                                                                                                                                                                    thông
                                                                                                                                                                                                                                                                                                                                    tin
                                                                                                                                                                                                                                                                                                                                    đặt
                                                                                                                                                                                                                                                                                                                                    hàng
                                                                                                                                                                                                                                                                                                                                    của
                                                                                                                                                                                                                                                                                                                                    bạn
                                                                                                                                                                                                                                                                                                                                    và
                                                                                                                                                                                                                                                                                                                                    sẽ
                                                                                                                                                                                                                                                                                                                                    chuẩn
                                                                                                                                                                                                                                                                                                                                    bị
                                                                                                                                                                                                                                                                                                                                    để
                                                                                                                                                                                                                                                                                                                                    gửi
                                                                                                                                                                                                                                                                                                                                    hàng
                                                                                                                                                                                                                                                                                                                                    sớm
                                                                                                                                                                                                                                                                                                                                    nhất
                                                                                                                                                                                                                                                                                                                                    có
                                                                                                                                                                                                                                                                                                                                    thể.
                                                                                                                                                                                                                                                                                                                                    Chi
                                                                                                                                                                                                                                                                                                                                    tiết
                                                                                                                                                                                                                                                                                                                                    về
                                                                                                                                                                                                                                                                                                                                    đơn
                                                                                                                                                                                                                                                                                                                                    hàng
                                                                                                                                                                                                                                                                                                                                    của
                                                                                                                                                                                                                                                                                                                                    bạn
                                                                                                                                                                                                                                                                                                                                    như
                                                                                                                                                                                                                                                                                                                                    sau:</span></span></span></span></span>
                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                        </table>
                                                                                                                                                                                                    </td>
                                                                                                                                                                                                </tr>
                                                                                                                                                                                            </tbody>
                                                                                                                                                                                        </table>
                                                                                                                                                                                    </td>
                                                                                                                                                                                </tr>
                                                                                                                                                                            </tbody>
                                                                                                                                                                        </table>
                                                                                                                                                                    </td>
                                                                                                                                                                </tr>
                                                                                                                                                            </tbody>
                                                                                                                                                        </table>
                                                                                                                                                    </td>
                                                                                                                                                </tr>
                                                                                                                                            </tbody>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </tbody>
                                                                                                                        </table>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                        valign="top"
                                                                                                        class="mceGutterContainer"
                                                                                                        id="gutterContainerId-62">
                                                                                                        <table
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            width="100%"
                                                                                                            style="border-collapse:separate"
                                                                                                            role="presentation">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                        valign="top"
                                                                                                                        class="mceLayoutContainer"
                                                                                                                        id="b62">
                                                                                                                        <table
                                                                                                                            align="center"
                                                                                                                            border="0"
                                                                                                                            cellpadding="0"
                                                                                                                            cellspacing="0"
                                                                                                                            width="100%"
                                                                                                                            role="presentation"
                                                                                                                            data-block-id="62"
                                                                                                                            id="section_69e0484b0c002a5c2cedbef604b67be2"
                                                                                                                            class="mceLayout">
                                                                                                                            <tbody>
                                                                                                                                <tr
                                                                                                                                    class="mceRow">
                                                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                                                                                        valign="top">
                                                                                                                                        <table
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="0"
                                                                                                                                            width="100%"
                                                                                                                                            role="presentation">
                                                                                                                                            <tbody>
                                                                                                                                                <tr>
                                                                                                                                                    <td valign="top"
                                                                                                                                                        class="mceColumn"
                                                                                                                                                        id="mceColumnId--27"
                                                                                                                                                        data-block-id="-27"
                                                                                                                                                        colspan="12"
                                                                                                                                                        width="100%">
                                                                                                                                                        <table
                                                                                                                                                            border="0"
                                                                                                                                                            cellpadding="0"
                                                                                                                                                            cellspacing="0"
                                                                                                                                                            width="100%"
                                                                                                                                                            role="presentation">
                                                                                                                                                            <tbody>
                                                                                                                                                                <tr>
                                                                                                                                                                    <td style="border:0;border-radius:0"
                                                                                                                                                                        valign="top"
                                                                                                                                                                        align="center"
                                                                                                                                                                        id="b-17">
                                                                                                                                                                        <table
                                                                                                                                                                            align="center"
                                                                                                                                                                            border="0"
                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                            width="100%"
                                                                                                                                                                            role="presentation"
                                                                                                                                                                            data-block-id="-17">
                                                                                                                                                                            <tbody>
                                                                                                                                                                                <tr
                                                                                                                                                                                    class="mceRow">
                                                                                                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                                                                                                                                        valign="top">
                                                                                                                                                                                        <table
                                                                                                                                                                                            border="0"
                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                            width="100%"
                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                <tr>
                                                                                                                                                                                                    <td valign="top"
                                                                                                                                                                                                        class="mceColumn"
                                                                                                                                                                                                        id="mceColumnId--34"
                                                                                                                                                                                                        data-block-id="-34"
                                                                                                                                                                                                        colspan="12"
                                                                                                                                                                                                        width="100%">
                                                                                                                                                                                                        <table
                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                    <td style="border:0;border-radius:0"
                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                        id="b67">
                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                            align="center"
                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                            role="presentation"
                                                                                                                                                                                                                            data-block-id="67">
                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                <tr
                                                                                                                                                                                                                                    class="mceRow">
                                                                                                                                                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover;padding-top:0px;padding-bottom:0px"
                                                                                                                                                                                                                                        valign="top">
                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                            cellspacing="24"
                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                            style="table-layout:fixed"
                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                            <colgroup>
                                                                                                                                                                                                                                                <col span="1"
                                                                                                                                                                                                                                                    width="8.333333333333332%" />
                                                                                                                                                                                                                                                <col span="1"
                                                                                                                                                                                                                                                    width="8.333333333333332%" />
                                                                                                                                                                                                                                                <col span="1"
                                                                                                                                                                                                                                                    width="8.333333333333332%" />
                                                                                                                                                                                                                                                <col span="1"
                                                                                                                                                                                                                                                    width="8.333333333333332%" />
                                                                                                                                                                                                                                                <col span="1"
                                                                                                                                                                                                                                                    width="8.333333333333332%" />
                                                                                                                                                                                                                                                <col span="1"
                                                                                                                                                                                                                                                    width="8.333333333333332%" />
                                                                                                                                                                                                                                                <col span="1"
                                                                                                                                                                                                                                                    width="8.333333333333332%" />
                                                                                                                                                                                                                                                <col span="1"
                                                                                                                                                                                                                                                    width="8.333333333333332%" />
                                                                                                                                                                                                                                                <col span="1"
                                                                                                                                                                                                                                                    width="8.333333333333332%" />
                                                                                                                                                                                                                                                <col span="1"
                                                                                                                                                                                                                                                    width="8.333333333333332%" />
                                                                                                                                                                                                                                                <col span="1"
                                                                                                                                                                                                                                                    width="8.333333333333332%" />
                                                                                                                                                                                                                                                <col span="1"
                                                                                                                                                                                                                                                    width="8.333333333333332%" />
                                                                                                                                                                                                                                            </colgroup>
                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0"
                                                                                                                                                                                                                                                        valign="center"
                                                                                                                                                                                                                                                        class="mceColumn"
                                                                                                                                                                                                                                                        id="mceColumnId-64"
                                                                                                                                                                                                                                                        data-block-id="64"
                                                                                                                                                                                                                                                        colspan="3"
                                                                                                                                                                                                                                                        width="25%">
                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                        class="mceGutterContainer"
                                                                                                                                                                                                                                                                        id="gutterContainerId-70">
                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                            style="border-collapse:separate"
                                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                                        id="b70">
                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                                            style="border:0;background-color:transparent;border-radius:0;border-collapse:separate">
                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                                                                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                                                                                                                                                                                        <div data-block-id="70"
                                                                                                                                                                                                                                                                                                            class="mceText"
                                                                                                                                                                                                                                                                                                            id="d70"
                                                                                                                                                                                                                                                                                                            style="width:100%">
                                                                                                                                                                                                                                                                                                            <p
                                                                                                                                                                                                                                                                                                                class="last-child">
                                                                                                                                                                                                                                                                                                                Khách
                                                                                                                                                                                                                                                                                                                hàng
                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                        class="mceGutterContainer"
                                                                                                                                                                                                                                                                        id="gutterContainerId-71">
                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                            style="border-collapse:separate"
                                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                                        id="b71">
                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                                            style="border:0;background-color:transparent;border-radius:0;border-collapse:separate">
                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                                                                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                                                                                                                                                                                        <div data-block-id="71"
                                                                                                                                                                                                                                                                                                            class="mceText"
                                                                                                                                                                                                                                                                                                            id="d71"
                                                                                                                                                                                                                                                                                                            style="width:100%">
                                                                                                                                                                                                                                                                                                            <p
                                                                                                                                                                                                                                                                                                                class="last-child">
                                                                                                                                                                                                                                                                                                                Số
                                                                                                                                                                                                                                                                                                                điện
                                                                                                                                                                                                                                                                                                                thoại
                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                        class="mceGutterContainer"
                                                                                                                                                                                                                                                                        id="gutterContainerId-74">
                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                            style="border-collapse:separate"
                                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                                        id="b74">
                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                                            style="border:0;background-color:transparent;border-radius:0;border-collapse:separate">
                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                                                                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                                                                                                                                                                                        <div data-block-id="74"
                                                                                                                                                                                                                                                                                                            class="mceText"
                                                                                                                                                                                                                                                                                                            id="d74"
                                                                                                                                                                                                                                                                                                            style="width:100%">
                                                                                                                                                                                                                                                                                                            <p
                                                                                                                                                                                                                                                                                                                class="last-child">
                                                                                                                                                                                                                                                                                                                Địa
                                                                                                                                                                                                                                                                                                                chỉ
                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                        class="mceGutterContainer"
                                                                                                                                                                                                                                                                        id="gutterContainerId-75">
                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                            style="border-collapse:separate"
                                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                                        id="b75">
                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                                            style="border:0;background-color:transparent;border-radius:0;border-collapse:separate">
                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                                                                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                                                                                                                                                                                        <div data-block-id="75"
                                                                                                                                                                                                                                                                                                            class="mceText"
                                                                                                                                                                                                                                                                                                            id="d75"
                                                                                                                                                                                                                                                                                                            style="width:100%">
                                                                                                                                                                                                                                                                                                            <p
                                                                                                                                                                                                                                                                                                                class="last-child">
                                                                                                                                                                                                                                                                                                                Sản
                                                                                                                                                                                                                                                                                                                phẩm
                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                        class="mceGutterContainer"
                                                                                                                                                                                                                                                                        id="gutterContainerId-78">
                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                            style="border-collapse:separate"
                                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                                        id="b78">
                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                                            style="border:0;background-color:transparent;border-radius:0;border-collapse:separate">
                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                                                                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                                                                                                                                                                                        <div data-block-id="78"
                                                                                                                                                                                                                                                                                                            class="mceText"
                                                                                                                                                                                                                                                                                                            id="d78"
                                                                                                                                                                                                                                                                                                            style="width:100%">
                                                                                                                                                                                                                                                                                                            <p
                                                                                                                                                                                                                                                                                                                class="last-child">
                                                                                                                                                                                                                                                                                                                <br />
                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                        class="mceGutterContainer"
                                                                                                                                                                                                                                                                        id="gutterContainerId-84">
                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                            style="border-collapse:separate"
                                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                                        id="b84">
                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                                            style="border:0;background-color:transparent;border-radius:0;border-collapse:separate">
                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                                                                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                                                                                                                                                                                        <div data-block-id="84"
                                                                                                                                                                                                                                                                                                            class="mceText"
                                                                                                                                                                                                                                                                                                            id="d84"
                                                                                                                                                                                                                                                                                                            style="width:100%">
                                                                                                                                                                                                                                                                                                            <p
                                                                                                                                                                                                                                                                                                                class="last-child">
                                                                                                                                                                                                                                                                                                                Mã
                                                                                                                                                                                                                                                                                                                đơn
                                                                                                                                                                                                                                                                                                                hàng
                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                        class="mceGutterContainer"
                                                                                                                                                                                                                                                                        id="gutterContainerId-80">
                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                            style="border-collapse:separate"
                                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                                        id="b80">
                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                                            style="border:0;background-color:transparent;border-radius:0;border-collapse:separate">
                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                                                                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                                                                                                                                                                                        <div data-block-id="80"
                                                                                                                                                                                                                                                                                                            class="mceText"
                                                                                                                                                                                                                                                                                                            id="d80"
                                                                                                                                                                                                                                                                                                            style="width:100%">
                                                                                                                                                                                                                                                                                                            <p
                                                                                                                                                                                                                                                                                                                class="last-child">
                                                                                                                                                                                                                                                                                                                Vận
                                                                                                                                                                                                                                                                                                                chuyển
                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                        class="mceGutterContainer"
                                                                                                                                                                                                                                                                        id="gutterContainerId-82">
                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                            style="border-collapse:separate"
                                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                                        id="b82">
                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                                            style="border:0;background-color:transparent;border-radius:0;border-collapse:separate">
                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                                                                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                                                                                                                                                                                        <div data-block-id="82"
                                                                                                                                                                                                                                                                                                            class="mceText"
                                                                                                                                                                                                                                                                                                            id="d82"
                                                                                                                                                                                                                                                                                                            style="width:100%">
                                                                                                                                                                                                                                                                                                            <p
                                                                                                                                                                                                                                                                                                                class="last-child">
                                                                                                                                                                                                                                                                                                                Tổng
                                                                                                                                                                                                                                                                                                                thanh
                                                                                                                                                                                                                                                                                                                toán
                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0"
                                                                                                                                                                                                                                                        valign="center"
                                                                                                                                                                                                                                                        class="mceColumn"
                                                                                                                                                                                                                                                        id="mceColumnId-69"
                                                                                                                                                                                                                                                        data-block-id="69"
                                                                                                                                                                                                                                                        colspan="9"
                                                                                                                                                                                                                                                        width="75%">
                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                        class="mceGutterContainer"
                                                                                                                                                                                                                                                                        id="gutterContainerId-72">
                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                            style="border-collapse:separate"
                                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                                        id="b72">
                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                                            style="border:0;background-color:transparent;border-radius:0;border-collapse:separate">
                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                                                                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                                                                                                                                                                                        <div data-block-id="72"
                                                                                                                                                                                                                                                                                                            class="mceText"
                                                                                                                                                                                                                                                                                                            id="d72"
                                                                                                                                                                                                                                                                                                            style="width:100%">
                                                                                                                                                                                                                                                                                                            <p
                                                                                                                                                                                                                                                                                                                class="last-child">
                                                                                                                                                                                                                                                                                                                {{CUSTOMER_NAME}}
                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                        class="mceGutterContainer"
                                                                                                                                                                                                                                                                        id="gutterContainerId-76">
                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                            style="border-collapse:separate"
                                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                                        id="b76">
                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                                            style="border:0;background-color:transparent;border-radius:0;border-collapse:separate">
                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                                                                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                                                                                                                                                                                        <div data-block-id="76"
                                                                                                                                                                                                                                                                                                            class="mceText"
                                                                                                                                                                                                                                                                                                            id="d76"
                                                                                                                                                                                                                                                                                                            style="width:100%">
                                                                                                                                                                                                                                                                                                            <p
                                                                                                                                                                                                                                                                                                                class="last-child">
                                                                                                                                                                                                                                                                                                                {{CUSTOMER_PHONE}}
                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                        class="mceGutterContainer"
                                                                                                                                                                                                                                                                        id="gutterContainerId-77">
                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                            style="border-collapse:separate"
                                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                                        id="b77">
                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                                            style="border:0;background-color:transparent;border-radius:0;border-collapse:separate">
                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                                                                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                                                                                                                                                                                        <div data-block-id="77"
                                                                                                                                                                                                                                                                                                            class="mceText"
                                                                                                                                                                                                                                                                                                            id="d77"
                                                                                                                                                                                                                                                                                                            style="width:100%">
                                                                                                                                                                                                                                                                                                            <p
                                                                                                                                                                                                                                                                                                                class="last-child">
                                                                                                                                                                                                                                                                                                                {{CUSTOMER_ADDRESS}}
                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                        class="mceGutterContainer"
                                                                                                                                                                                                                                                                        id="gutterContainerId-73">
                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                            style="border-collapse:separate"
                                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                                        id="b73">
                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                                            style="border:0;background-color:transparent;border-radius:0;border-collapse:separate">
                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                                                                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                                                                                                                                                                                        <div data-block-id="73"
                                                                                                                                                                                                                                                                                                            class="mceText"
                                                                                                                                                                                                                                                                                                            id="d73"
                                                                                                                                                                                                                                                                                                            style="width:100%">
                                                                                                                                                                                                                                                                                                            <p
                                                                                                                                                                                                                                                                                                                class="last-child">
                                                                                                                                                                                                                                                                                                                {{ORDER_ITEMS}}
                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                        class="mceGutterContainer"
                                                                                                                                                                                                                                                                        id="gutterContainerId-79">
                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                            style="border-collapse:separate"
                                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                                        id="b79">
                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                                            style="border:0;background-color:transparent;border-radius:0;border-collapse:separate">
                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                                                                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                                                                                                                                                                                        <div data-block-id="79"
                                                                                                                                                                                                                                                                                                            class="mceText"
                                                                                                                                                                                                                                                                                                            id="d79"
                                                                                                                                                                                                                                                                                                            style="width:100%">
                                                                                                                                                                                                                                                                                                            <p
                                                                                                                                                                                                                                                                                                                class="last-child">                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                        class="mceGutterContainer"
                                                                                                                                                                                                                                                                        id="gutterContainerId-85">
                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                            style="border-collapse:separate"
                                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                                        id="b85">
                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                                            style="border:0;background-color:transparent;border-radius:0;border-collapse:separate">
                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                                                                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                                                                                                                                                                                        <div data-block-id="85"
                                                                                                                                                                                                                                                                                                            class="mceText"
                                                                                                                                                                                                                                                                                                            id="d85"
                                                                                                                                                                                                                                                                                                            style="width:100%">
                                                                                                                                                                                                                                                                                                            <p
                                                                                                                                                                                                                                                                                                                class="last-child">
                                                                                                                                                                                                                                                                                                                {{ORDER_ID}}
                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                        class="mceGutterContainer"
                                                                                                                                                                                                                                                                        id="gutterContainerId-81">
                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                            style="border-collapse:separate"
                                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                                        id="b81">
                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                                            style="border:0;background-color:transparent;border-radius:0;border-collapse:separate">
                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                                                                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                                                                                                                                                                                        <div data-block-id="81"
                                                                                                                                                                                                                                                                                                            class="mceText"
                                                                                                                                                                                                                                                                                                            id="d81"
                                                                                                                                                                                                                                                                                                            style="width:100%">
                                                                                                                                                                                                                                                                                                            <p
                                                                                                                                                                                                                                                                                                                class="last-child">
                                                                                                                                                                                                                                                                                                                <em>Miễn
                                                                                                                                                                                                                                                                                                                    phí</em>
                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                        class="mceGutterContainer"
                                                                                                                                                                                                                                                                        id="gutterContainerId-83">
                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                            style="border-collapse:separate"
                                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                                        id="b83">
                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                                            style="border:0;background-color:transparent;border-radius:0;border-collapse:separate">
                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                                                                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                                                                                                                                                                                        <div data-block-id="83"
                                                                                                                                                                                                                                                                                                            class="mceText"
                                                                                                                                                                                                                                                                                                            id="d83"
                                                                                                                                                                                                                                                                                                            style="width:100%">
                                                                                                                                                                                                                                                                                                            <p
                                                                                                                                                                                                                                                                                                                class="last-child">
                                                                                                                                                                                                                                                                                                                {{FINAL_TOTAL}}
                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                        </table>
                                                                                                                                                                                                    </td>
                                                                                                                                                                                                </tr>
                                                                                                                                                                                            </tbody>
                                                                                                                                                                                        </table>
                                                                                                                                                                                    </td>
                                                                                                                                                                                </tr>
                                                                                                                                                                            </tbody>
                                                                                                                                                                        </table>
                                                                                                                                                                    </td>
                                                                                                                                                                </tr>
                                                                                                                                                            </tbody>
                                                                                                                                                        </table>
                                                                                                                                                    </td>
                                                                                                                                                </tr>
                                                                                                                                            </tbody>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </tbody>
                                                                                                                        </table>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                        valign="top"
                                                                                                        class="mceGutterContainer"
                                                                                                        id="gutterContainerId-51">
                                                                                                        <table
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            width="100%"
                                                                                                            style="border-collapse:separate"
                                                                                                            role="presentation">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                        valign="top"
                                                                                                                        id="b51">
                                                                                                                        <table
                                                                                                                            width="100%"
                                                                                                                            style="border:0;background-color:transparent;border-radius:0;border-collapse:separate">
                                                                                                                            <tbody>
                                                                                                                                <tr>
                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                        <div data-block-id="51"
                                                                                                                                            class="mceText"
                                                                                                                                            id="d51"
                                                                                                                                            style="width:100%">
                                                                                                                                            <p style="text-align: center;"
                                                                                                                                                class="last-child">
                                                                                                                                                <strong><span
                                                                                                                                                        style="color:#879b49;"><span
                                                                                                                                                            style="font-size: 18px">Đừng
                                                                                                                                                            lo,
                                                                                                                                                            nến
                                                                                                                                                            thơm
                                                                                                                                                            nhà
                                                                                                                                                            Préci
                                                                                                                                                            được
                                                                                                                                                            ra
                                                                                                                                                            đời
                                                                                                                                                            từ
                                                                                                                                                            những
                                                                                                                                                            nỗi
                                                                                                                                                            băn
                                                                                                                                                            khoăn
                                                                                                                                                            đó</span></span></strong>
                                                                                                                                            </p>
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </tbody>
                                                                                                                        </table>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td style="background-color:transparent;padding-top:12px;padding-bottom:12px;padding-right:16px;padding-left:16px;border:0;border-radius:0"
                                                                                                        valign="top"
                                                                                                        class="mceButtonBlockContainer"
                                                                                                        align="center"
                                                                                                        id="b58">
                                                                                                        <div>
                                                                                                            <!--[if !mso]><!-->
                                                                                                        </div>
                                                                                                        <table
                                                                                                            align="center"
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            role="presentation"
                                                                                                            data-block-id="58"
                                                                                                            class="mceButtonContainer">
                                                                                                            <tbody>
                                                                                                                <tr
                                                                                                                    class="mceStandardButton">
                                                                                                                    <td style="background-color:#b7192f;border-radius:0;text-align:center"
                                                                                                                        valign="top"
                                                                                                                        class="mceButton">
                                                                                                                        <a href="https://www.nenthompreci.com/"
                                                                                                                            target="_blank"
                                                                                                                            class="mceButtonLink"
                                                                                                                            style="background-color:#b7192f;border-radius:0;border:2px solid #faa10b;color:#ffffff;display:block;font-family:'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif;font-size:19px;font-weight:bold;font-style:normal;padding:16px 28px;text-decoration:none;text-align:center;direction:ltr;letter-spacing:0px"
                                                                                                                            rel="noreferrer">TÌM
                                                                                                                            HIỂU
                                                                                                                            NGAY
                                                                                                                            CÁCH
                                                                                                                            TẠO
                                                                                                                            RA
                                                                                                                            MÓN
                                                                                                                            QUÀ
                                                                                                                            ĐỘC
                                                                                                                            BẢN</a>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                        <div>
                                                                                                            <!--<![endif]-->
                                                                                                        </div>
                                                                                                        <table
                                                                                                            align="center"
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            role="presentation"
                                                                                                            data-block-id="58"
                                                                                                            class="mceButtonContainer">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <!--[if mso]>
<td align="center">
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:w="urn:schemas-microsoft-com:office:word"
href="https://www.nenthompreci.com/"
style="v-text-anchor:middle; width:528.37px; height:55.99px;"
arcsize="0%"
strokecolor="#faa10b"
strokeweight="2px"
fillcolor="#b7192f">
<v:stroke dashstyle="solid"/>
<w:anchorlock />
<center style="
color: #ffffff;
display: block;
font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif;
font-size: 19;
font-style: normal;
font-weight: bold;
letter-spacing: 0px;
text-decoration: none;
text-align: center;
direction: ltr;"
>
TÌM HIỂU NGAY CÁCH TẠO RA MÓN QUÀ ĐỘC BẢN
</center>
</v:roundrect>
</td>
<![endif]-->
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                                    </td>
                                </tr>
                            </tbody>
                            <tbody data-block-id="11" class="mceWrapper">
                                <tr>
                                    <td style="background-color:#dbbfa9" valign="top" align="center"
                                        class="mceSection11">
                                        <!--[if (gte mso 9)|(IE)]><table align="center" border="0" cellspacing="0" cellpadding="0" width="660" style="width:660px;"><tr><td><![endif]-->
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                            style="max-width:660px" role="presentation">
                                            <tbody>
                                                <tr>
                                                    <td style="background-color:#ffffff" valign="top"
                                                        class="mceWrapperInner">
                                                        <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                            width="100%" role="presentation" data-block-id="10">
                                                            <tbody>
                                                                <tr class="mceRow">
                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                        valign="top">
                                                                        <table border="0" cellpadding="0"
                                                                            cellspacing="0" width="100%"
                                                                            role="presentation">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style="padding-top:0;padding-bottom:0"
                                                                                        valign="top" class="mceColumn"
                                                                                        id="mceColumnId--19"
                                                                                        data-block-id="-19" colspan="12"
                                                                                        width="100%">
                                                                                        <table border="0"
                                                                                            cellpadding="0"
                                                                                            cellspacing="0" width="100%"
                                                                                            role="presentation">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td valign="top"
                                                                                                        class="mceGutterContainer"
                                                                                                        id="gutterContainerId-54">
                                                                                                        <table
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            width="100%"
                                                                                                            style="border-collapse:separate"
                                                                                                            role="presentation">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="background-color:#715136;padding-top:8px;padding-bottom:8px;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                        valign="top"
                                                                                                                        class="mceLayoutContainer"
                                                                                                                        id="b54">
                                                                                                                        <table
                                                                                                                            align="center"
                                                                                                                            border="0"
                                                                                                                            cellpadding="0"
                                                                                                                            cellspacing="0"
                                                                                                                            width="100%"
                                                                                                                            role="presentation"
                                                                                                                            data-block-id="54"
                                                                                                                            id="section_e8ed716014ca1e81d92b55dd5bc58222"
                                                                                                                            class="mceLayout">
                                                                                                                            <tbody>
                                                                                                                                <tr
                                                                                                                                    class="mceRow">
                                                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                                                                                        valign="top">
                                                                                                                                        <table
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="0"
                                                                                                                                            width="100%"
                                                                                                                                            role="presentation">
                                                                                                                                            <tbody>
                                                                                                                                                <tr>
                                                                                                                                                    <td valign="top"
                                                                                                                                                        class="mceColumn"
                                                                                                                                                        id="mceColumnId--26"
                                                                                                                                                        data-block-id="-26"
                                                                                                                                                        colspan="12"
                                                                                                                                                        width="100%">
                                                                                                                                                        <table
                                                                                                                                                            border="0"
                                                                                                                                                            cellpadding="0"
                                                                                                                                                            cellspacing="0"
                                                                                                                                                            width="100%"
                                                                                                                                                            role="presentation">
                                                                                                                                                            <tbody>
                                                                                                                                                                <tr>
                                                                                                                                                                    <td style="border:0;border-radius:0"
                                                                                                                                                                        valign="top"
                                                                                                                                                                        align="center"
                                                                                                                                                                        id="b-15">
                                                                                                                                                                        <table
                                                                                                                                                                            align="center"
                                                                                                                                                                            border="0"
                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                            width="100%"
                                                                                                                                                                            role="presentation"
                                                                                                                                                                            data-block-id="-15">
                                                                                                                                                                            <tbody>
                                                                                                                                                                                <tr
                                                                                                                                                                                    class="mceRow">
                                                                                                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                                                                                                                                        valign="top">
                                                                                                                                                                                        <table
                                                                                                                                                                                            border="0"
                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                            width="100%"
                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                <tr>
                                                                                                                                                                                                    <td valign="top"
                                                                                                                                                                                                        class="mceColumn"
                                                                                                                                                                                                        id="mceColumnId--33"
                                                                                                                                                                                                        data-block-id="-33"
                                                                                                                                                                                                        colspan="12"
                                                                                                                                                                                                        width="100%">
                                                                                                                                                                                                        <table
                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                    <td style="border:0;border-radius:0"
                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                        id="b53">
                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                            align="center"
                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                            role="presentation"
                                                                                                                                                                                                                            data-block-id="53">
                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                <tr
                                                                                                                                                                                                                                    class="mceRow">
                                                                                                                                                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                                                                                                                                                                                        valign="top">
                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                            cellspacing="24"
                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0"
                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                        class="mceColumn"
                                                                                                                                                                                                                                                        id="mceColumnId-52"
                                                                                                                                                                                                                                                        data-block-id="52"
                                                                                                                                                                                                                                                        colspan="12"
                                                                                                                                                                                                                                                        width="100%">
                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                    <td style="background-color:#715136;padding-top:12px;padding-bottom:12px;padding-right:16px;padding-left:16px;border:0;border-radius:0"
                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                        class="mceImageBlockContainer"
                                                                                                                                                                                                                                                                        align="center"
                                                                                                                                                                                                                                                                        id="b36">
                                                                                                                                                                                                                                                                        <div>
                                                                                                                                                                                                                                                                            <!--[if !mso]><!-->
                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                            align="center"
                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                            width="85%"
                                                                                                                                                                                                                                                                            style="border-collapse:separate;margin:0;vertical-align:top;max-width:85%;width:85%;height:auto"
                                                                                                                                                                                                                                                                            role="presentation"
                                                                                                                                                                                                                                                                            data-testid="image-36">
                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                    <td style="border:0;border-radius:0;margin:0"
                                                                                                                                                                                                                                                                                        valign="top">
                                                                                                                                                                                                                                                                                        <img alt=""
                                                                                                                                                                                                                                                                                            src="https://mcusercontent.com/9ff0301507dcd31784caa6f9c/images/d702947d-4344-de09-8a04-334f5a831076.png"
                                                                                                                                                                                                                                                                                            width="533.8"
                                                                                                                                                                                                                                                                                            height="auto"
                                                                                                                                                                                                                                                                                            style="display:block;max-width:100%;height:auto;border-radius:0"
                                                                                                                                                                                                                                                                                            class="imageDropZone mceImage"
                                                                                                                                                                                                                                                                                            data-block-id="36" />
                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                        <div>
                                                                                                                                                                                                                                                                            <!--<![endif]-->
                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                        <div>
                                                                                                                                                                                                                                                                            <!--[if mso]>
<span class="mceImageBorder" style="border:0;border-width:2px;vertical-align:top;margin:0"><img role="presentation" class="imageDropZone mceImage" src="https://mcusercontent.com/9ff0301507dcd31784caa6f9c/images/d702947d-4344-de09-8a04-334f5a831076.png" alt="" width="533.8" height="auto" style="display:block;max-width:533.8px;width:533.8px;height:auto"/></span>
<![endif]-->
                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                        </table>
                                                                                                                                                                                                    </td>
                                                                                                                                                                                                </tr>
                                                                                                                                                                                            </tbody>
                                                                                                                                                                                        </table>
                                                                                                                                                                                    </td>
                                                                                                                                                                                </tr>
                                                                                                                                                                            </tbody>
                                                                                                                                                                        </table>
                                                                                                                                                                    </td>
                                                                                                                                                                </tr>
                                                                                                                                                            </tbody>
                                                                                                                                                        </table>
                                                                                                                                                    </td>
                                                                                                                                                </tr>
                                                                                                                                            </tbody>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </tbody>
                                                                                                                        </table>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                        valign="top"
                                                                                                        class="mceGutterContainer"
                                                                                                        id="gutterContainerId-34">
                                                                                                        <table
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            width="100%"
                                                                                                            style="border-collapse:separate"
                                                                                                            role="presentation">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                        valign="top"
                                                                                                                        id="b34">
                                                                                                                        <table
                                                                                                                            width="100%"
                                                                                                                            style="border:0;background-color:#7b8b4c;border-radius:0;border-collapse:separate">
                                                                                                                            <tbody>
                                                                                                                                <tr>
                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                        <div data-block-id="34"
                                                                                                                                            class="mceText"
                                                                                                                                            id="d34"
                                                                                                                                            style="width:100%">
                                                                                                                                            <p
                                                                                                                                                style="text-align: center;">
                                                                                                                                                <strong><span
                                                                                                                                                        style="color:#ffffff;"><span
                                                                                                                                                            style="font-size: 23px"><span
                                                                                                                                                                style="font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif"><span
                                                                                                                                                                    style="background-color: transparent">Công
                                                                                                                                                                    nghệ
                                                                                                                                                                    customize
                                                                                                                                                                    mẫu
                                                                                                                                                                    nến
                                                                                                                                                                    thơm
                                                                                                                                                                    theo
                                                                                                                                                                    nhu
                                                                                                                                                                    cầu</span></span></span></span></strong>
                                                                                                                                            </p>
                                                                                                                                            <p style="text-align: center;"
                                                                                                                                                class="last-child">
                                                                                                                                                <strong><span
                                                                                                                                                        style="color:#ffffff;"><span
                                                                                                                                                            style="font-size: 23px"><span
                                                                                                                                                                style="font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif"><span
                                                                                                                                                                    style="background-color: transparent">
                                                                                                                                                                    với
                                                                                                                                                                    mô
                                                                                                                                                                    phỏng
                                                                                                                                                                    3D
                                                                                                                                                                    realtime
                                                                                                                                                                    &amp;
                                                                                                                                                                    QR
                                                                                                                                                                    giọng
                                                                                                                                                                    nói
                                                                                                                                                                </span></span></span></span></strong>
                                                                                                                                            </p>
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </tbody>
                                                                                                                        </table>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td valign="top"
                                                                                                        class="mceGutterContainer"
                                                                                                        id="gutterContainerId-48">
                                                                                                        <table
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            width="100%"
                                                                                                            style="border-collapse:separate"
                                                                                                            role="presentation">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="background-color:#715136;padding-top:8px;padding-bottom:8px;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                        valign="top"
                                                                                                                        class="mceLayoutContainer"
                                                                                                                        id="b48">
                                                                                                                        <table
                                                                                                                            align="center"
                                                                                                                            border="0"
                                                                                                                            cellpadding="0"
                                                                                                                            cellspacing="0"
                                                                                                                            width="100%"
                                                                                                                            role="presentation"
                                                                                                                            data-block-id="48"
                                                                                                                            id="section_b4bfe71350cbbd0862641ca2bd2826d5"
                                                                                                                            class="mceLayout">
                                                                                                                            <tbody>
                                                                                                                                <tr
                                                                                                                                    class="mceRow">
                                                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                                                                                        valign="top">
                                                                                                                                        <table
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="0"
                                                                                                                                            width="100%"
                                                                                                                                            role="presentation">
                                                                                                                                            <tbody>
                                                                                                                                                <tr>
                                                                                                                                                    <td valign="top"
                                                                                                                                                        class="mceColumn"
                                                                                                                                                        id="mceColumnId--25"
                                                                                                                                                        data-block-id="-25"
                                                                                                                                                        colspan="12"
                                                                                                                                                        width="100%">
                                                                                                                                                        <table
                                                                                                                                                            border="0"
                                                                                                                                                            cellpadding="0"
                                                                                                                                                            cellspacing="0"
                                                                                                                                                            width="100%"
                                                                                                                                                            role="presentation">
                                                                                                                                                            <tbody>
                                                                                                                                                                <tr>
                                                                                                                                                                    <td style="border:0;border-radius:0"
                                                                                                                                                                        valign="top"
                                                                                                                                                                        align="center"
                                                                                                                                                                        id="b-13">
                                                                                                                                                                        <table
                                                                                                                                                                            align="center"
                                                                                                                                                                            border="0"
                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                            width="100%"
                                                                                                                                                                            role="presentation"
                                                                                                                                                                            data-block-id="-13">
                                                                                                                                                                            <tbody>
                                                                                                                                                                                <tr
                                                                                                                                                                                    class="mceRow">
                                                                                                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                                                                                                                                        valign="top">
                                                                                                                                                                                        <table
                                                                                                                                                                                            border="0"
                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                            width="100%"
                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                <tr>
                                                                                                                                                                                                    <td valign="top"
                                                                                                                                                                                                        class="mceColumn"
                                                                                                                                                                                                        id="mceColumnId--32"
                                                                                                                                                                                                        data-block-id="-32"
                                                                                                                                                                                                        colspan="12"
                                                                                                                                                                                                        width="100%">
                                                                                                                                                                                                        <table
                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                    <td style="border:0;border-radius:0"
                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                        id="b47">
                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                            align="center"
                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                            role="presentation"
                                                                                                                                                                                                                            data-block-id="47">
                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                <tr
                                                                                                                                                                                                                                    class="mceRow">
                                                                                                                                                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                                                                                                                                                                                        valign="top">
                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                            cellspacing="24"
                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0"
                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                        class="mceColumn"
                                                                                                                                                                                                                                                        id="mceColumnId-46"
                                                                                                                                                                                                                                                        data-block-id="46"
                                                                                                                                                                                                                                                        colspan="12"
                                                                                                                                                                                                                                                        width="100%">
                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                    <td style="background-color:#715136;padding-top:12px;padding-bottom:12px;padding-right:16px;padding-left:16px;border:0;border-radius:0"
                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                        class="mceImageBlockContainer"
                                                                                                                                                                                                                                                                        align="center"
                                                                                                                                                                                                                                                                        id="b44">
                                                                                                                                                                                                                                                                        <div>
                                                                                                                                                                                                                                                                            <!--[if !mso]><!-->
                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                            align="center"
                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                            width="85%"
                                                                                                                                                                                                                                                                            style="border-collapse:separate;margin:0;vertical-align:top;max-width:85%;width:85%;height:auto"
                                                                                                                                                                                                                                                                            role="presentation"
                                                                                                                                                                                                                                                                            data-testid="image-44">
                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                    <td style="border:0;border-radius:0;margin:0"
                                                                                                                                                                                                                                                                                        valign="top">
                                                                                                                                                                                                                                                                                        <img alt=""
                                                                                                                                                                                                                                                                                            src="https://mcusercontent.com/9ff0301507dcd31784caa6f9c/images/f67d2d22-3940-6116-07e9-f87dfee5686a.jpg"
                                                                                                                                                                                                                                                                                            width="533.8"
                                                                                                                                                                                                                                                                                            height="auto"
                                                                                                                                                                                                                                                                                            style="display:block;max-width:100%;height:auto;border-radius:0"
                                                                                                                                                                                                                                                                                            class="imageDropZone mceImage"
                                                                                                                                                                                                                                                                                            data-block-id="44" />
                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                        <div>
                                                                                                                                                                                                                                                                            <!--<![endif]-->
                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                        <div>
                                                                                                                                                                                                                                                                            <!--[if mso]>
<span class="mceImageBorder" style="border:0;border-width:2px;vertical-align:top;margin:0"><img role="presentation" class="imageDropZone mceImage" src="https://mcusercontent.com/9ff0301507dcd31784caa6f9c/images/f67d2d22-3940-6116-07e9-f87dfee5686a.jpg" alt="" width="533.8" height="auto" style="display:block;max-width:533.8px;width:533.8px;height:auto"/></span>
<![endif]-->
                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                        </table>
                                                                                                                                                                                                    </td>
                                                                                                                                                                                                </tr>
                                                                                                                                                                                            </tbody>
                                                                                                                                                                                        </table>
                                                                                                                                                                                    </td>
                                                                                                                                                                                </tr>
                                                                                                                                                                            </tbody>
                                                                                                                                                                        </table>
                                                                                                                                                                    </td>
                                                                                                                                                                </tr>
                                                                                                                                                            </tbody>
                                                                                                                                                        </table>
                                                                                                                                                    </td>
                                                                                                                                                </tr>
                                                                                                                                            </tbody>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </tbody>
                                                                                                                        </table>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                        valign="top"
                                                                                                        class="mceGutterContainer"
                                                                                                        id="gutterContainerId-59">
                                                                                                        <table
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            width="100%"
                                                                                                            style="border-collapse:separate"
                                                                                                            role="presentation">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                        valign="top"
                                                                                                                        id="b59">
                                                                                                                        <table
                                                                                                                            width="100%"
                                                                                                                            style="border:0;background-color:#b7192f;border-radius:0;border-collapse:separate">
                                                                                                                            <tbody>
                                                                                                                                <tr>
                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                        <div data-block-id="59"
                                                                                                                                            class="mceText"
                                                                                                                                            id="d59"
                                                                                                                                            style="width:100%">
                                                                                                                                            <p
                                                                                                                                                style="line-height: 0; mso-line-height-alt: 0%;">
                                                                                                                                                <br />
                                                                                                                                            </p>
                                                                                                                                            <h2
                                                                                                                                                class="last-child">
                                                                                                                                                <strong><span
                                                                                                                                                        style="color:rgb(0, 0, 0);"><span
                                                                                                                                                            style="font-family: &quot;Times New Roman&quot;, serif"><span
                                                                                                                                                                style="background-color: transparent">🔥</span></span></span><span
                                                                                                                                                        style="color:#ffffff;">ƯU
                                                                                                                                                        ĐÃI
                                                                                                                                                        CỰC
                                                                                                                                                        KHỦNG
                                                                                                                                                        NHÂN
                                                                                                                                                        DỊP
                                                                                                                                                        8/3
                                                                                                                                                        <span
                                                                                                                                                            style="font-family: 'Times New Roman', serif"><span
                                                                                                                                                                style="background-color: transparent">🔥</span></span></span></strong>
                                                                                                                                            </h2>
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </tbody>
                                                                                                                        </table>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                        valign="top"
                                                                                                        class="mceGutterContainer"
                                                                                                        id="gutterContainerId-60">
                                                                                                        <table
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            width="100%"
                                                                                                            style="border-collapse:separate"
                                                                                                            role="presentation">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                        valign="top"
                                                                                                                        id="b60">
                                                                                                                        <table
                                                                                                                            width="100%"
                                                                                                                            style="border:0;background-color:transparent;border-radius:0;border-collapse:separate">
                                                                                                                            <tbody>
                                                                                                                                <tr>
                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                        <div data-block-id="60"
                                                                                                                                            class="mceText"
                                                                                                                                            id="d60"
                                                                                                                                            style="width:100%">
                                                                                                                                            <p
                                                                                                                                                class="mcePastedContent">
                                                                                                                                                <span
                                                                                                                                                    style="color:rgb(0, 0, 0);"><span
                                                                                                                                                        style="font-size: 13pt"><span
                                                                                                                                                            style="font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif"><span
                                                                                                                                                                style="font-weight:normal;"><span
                                                                                                                                                                    style="background-color: transparent">✅
                                                                                                                                                                    Giảm</span></span></span></span></span><strong><span
                                                                                                                                                        style="color:rgb(0, 0, 0);"><span
                                                                                                                                                            style="font-size: 13pt"><span
                                                                                                                                                                style="font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif"><span
                                                                                                                                                                    style="background-color: transparent">
                                                                                                                                                                    15%</span></span></span></span></strong><span
                                                                                                                                                    style="color:rgb(0, 0, 0);"><span
                                                                                                                                                        style="font-size: 13pt"><span
                                                                                                                                                            style="font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif"><span
                                                                                                                                                                style="font-weight:normal;"><span
                                                                                                                                                                    style="background-color: transparent">
                                                                                                                                                                    khi
                                                                                                                                                                    mua
                                                                                                                                                                </span></span><span
                                                                                                                                                                style="background-color: transparent">combo</span></span></span></span><strong><span
                                                                                                                                                        style="color:rgb(0, 0, 0);"><span
                                                                                                                                                            style="font-size: 13pt"><span
                                                                                                                                                                style="font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif"><span
                                                                                                                                                                    style="background-color: transparent">
                                                                                                                                                                    2
                                                                                                                                                                    nến</span></span></span></span></strong><span
                                                                                                                                                    style="color:rgb(0, 0, 0);"><span
                                                                                                                                                        style="font-size: 13pt"><span
                                                                                                                                                            style="font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif"><span
                                                                                                                                                                style="font-weight:normal;"><span
                                                                                                                                                                    style="background-color: transparent">.</span></span></span></span></span>
                                                                                                                                            </p>
                                                                                                                                            <p
                                                                                                                                                style="line-height: 0; mso-line-height-alt: 0%;">
                                                                                                                                                <br />
                                                                                                                                            </p>
                                                                                                                                            <p
                                                                                                                                                class="mcePastedContent">
                                                                                                                                                <span
                                                                                                                                                    style="color:rgb(0, 0, 0);"><span
                                                                                                                                                        style="font-size: 13pt"><span
                                                                                                                                                            style="font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif"><span
                                                                                                                                                                style="font-weight:normal;"><span
                                                                                                                                                                    style="background-color: transparent">✅
                                                                                                                                                                    Giảm
                                                                                                                                                                </span></span></span></span></span><strong><span
                                                                                                                                                        style="color:rgb(0, 0, 0);"><span
                                                                                                                                                            style="font-size: 13pt"><span
                                                                                                                                                                style="font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif"><span
                                                                                                                                                                    style="background-color: transparent">20%
                                                                                                                                                                </span></span></span></span></strong><span
                                                                                                                                                    style="color:rgb(0, 0, 0);"><span
                                                                                                                                                        style="font-size: 13pt"><span
                                                                                                                                                            style="font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif"><span
                                                                                                                                                                style="font-weight:normal;"><span
                                                                                                                                                                    style="background-color: transparent">và
                                                                                                                                                                    tặng
                                                                                                                                                                    kèm
                                                                                                                                                                </span></span></span></span></span><strong><span
                                                                                                                                                        style="color:rgb(0, 0, 0);"><span
                                                                                                                                                            style="font-size: 13pt"><span
                                                                                                                                                                style="font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif"><span
                                                                                                                                                                    style="background-color: transparent">set
                                                                                                                                                                    diêm</span></span></span></span></strong><span
                                                                                                                                                    style="color:rgb(0, 0, 0);"><span
                                                                                                                                                        style="font-size: 13pt"><span
                                                                                                                                                            style="font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif"><span
                                                                                                                                                                style="font-weight:normal;"><span
                                                                                                                                                                    style="background-color: transparent">
                                                                                                                                                                    khi
                                                                                                                                                                    mua
                                                                                                                                                                    combo
                                                                                                                                                                </span></span></span></span></span><strong><span
                                                                                                                                                        style="color:rgb(0, 0, 0);"><span
                                                                                                                                                            style="font-size: 13pt"><span
                                                                                                                                                                style="font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif"><span
                                                                                                                                                                    style="background-color: transparent">3
                                                                                                                                                                    nến
                                                                                                                                                                    trở
                                                                                                                                                                    lên.</span></span></span></span></strong>
                                                                                                                                            </p>
                                                                                                                                            <p
                                                                                                                                                style="line-height: 0; mso-line-height-alt: 0%;">
                                                                                                                                                <br />
                                                                                                                                            </p>
                                                                                                                                            <p
                                                                                                                                                class="mcePastedContent">
                                                                                                                                                <span
                                                                                                                                                    style="color:rgb(0, 0, 0);"><span
                                                                                                                                                        style="font-size: 13pt"><span
                                                                                                                                                            style="font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif"><span
                                                                                                                                                                style="font-weight:normal;"><span
                                                                                                                                                                    style="background-color: transparent">✅
                                                                                                                                                                </span></span></span></span></span><strong><span
                                                                                                                                                        style="color:rgb(0, 0, 0);"><span
                                                                                                                                                            style="font-size: 13pt"><span
                                                                                                                                                                style="font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif"><span
                                                                                                                                                                    style="background-color: transparent">Miễn
                                                                                                                                                                    phí
                                                                                                                                                                    hộp
                                                                                                                                                                    quà</span></span></span></span></strong><span
                                                                                                                                                    style="color:rgb(0, 0, 0);"><span
                                                                                                                                                        style="font-size: 13pt"><span
                                                                                                                                                            style="font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif"><span
                                                                                                                                                                style="font-weight:normal;"><span
                                                                                                                                                                    style="background-color: transparent">
                                                                                                                                                                    phiên
                                                                                                                                                                    bản
                                                                                                                                                                    đặc
                                                                                                                                                                    biệt
                                                                                                                                                                    khi</span></span></span></span></span><strong><span
                                                                                                                                                        style="color:rgb(0, 0, 0);"><span
                                                                                                                                                            style="font-size: 13pt"><span
                                                                                                                                                                style="font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif"><span
                                                                                                                                                                    style="background-color: transparent">
                                                                                                                                                                    đặt
                                                                                                                                                                    mua
                                                                                                                                                                    trước
                                                                                                                                                                    ngày
                                                                                                                                                                    7/3.</span></span></span></span></strong>
                                                                                                                                            </p>
                                                                                                                                            <p
                                                                                                                                                class="mcePastedContent">
                                                                                                                                                <br />
                                                                                                                                            </p>
                                                                                                                                            <p
                                                                                                                                                style="line-height: 0; mso-line-height-alt: 0%;">
                                                                                                                                                <br />
                                                                                                                                            </p>
                                                                                                                                            <p style="text-align: center;"
                                                                                                                                                class="last-child">
                                                                                                                                                <a href="http://nenthompreci.com"
                                                                                                                                                    target="_blank"
                                                                                                                                                    style="color: #ffa200;"><strong><span
                                                                                                                                                            style="font-size: 34px"><span
                                                                                                                                                                style="font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif"><span
                                                                                                                                                                    style="background-color: transparent">TÔI
                                                                                                                                                                    MUỐN
                                                                                                                                                                    NHẬN
                                                                                                                                                                    ƯU
                                                                                                                                                                    ĐÃI
                                                                                                                                                                    NGAY</span></span></span></strong></a>
                                                                                                                                            </p>
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </tbody>
                                                                                                                        </table>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td valign="top"
                                                                                                        class="mceGutterContainer"
                                                                                                        id="gutterContainerId-28">
                                                                                                        <table
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            width="100%"
                                                                                                            style="border-collapse:separate"
                                                                                                            role="presentation">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="padding-top:8px;padding-bottom:8px;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                        valign="top"
                                                                                                                        class="mceLayoutContainer"
                                                                                                                        id="b28">
                                                                                                                        <table
                                                                                                                            align="center"
                                                                                                                            border="0"
                                                                                                                            cellpadding="0"
                                                                                                                            cellspacing="0"
                                                                                                                            width="100%"
                                                                                                                            role="presentation"
                                                                                                                            data-block-id="28"
                                                                                                                            id="section_53fa94028a94ec088a804ba81503b49f"
                                                                                                                            class="mceLayout">
                                                                                                                            <tbody>
                                                                                                                                <tr
                                                                                                                                    class="mceRow">
                                                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                                                                                        valign="top">
                                                                                                                                        <table
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="0"
                                                                                                                                            width="100%"
                                                                                                                                            role="presentation">
                                                                                                                                            <tbody>
                                                                                                                                                <tr>
                                                                                                                                                    <td valign="top"
                                                                                                                                                        class="mceColumn"
                                                                                                                                                        id="mceColumnId--22"
                                                                                                                                                        data-block-id="-22"
                                                                                                                                                        colspan="12"
                                                                                                                                                        width="100%">
                                                                                                                                                        <table
                                                                                                                                                            border="0"
                                                                                                                                                            cellpadding="0"
                                                                                                                                                            cellspacing="0"
                                                                                                                                                            width="100%"
                                                                                                                                                            role="presentation">
                                                                                                                                                            <tbody>
                                                                                                                                                                <tr>
                                                                                                                                                                    <td style="border:0;border-radius:0"
                                                                                                                                                                        valign="top"
                                                                                                                                                                        align="center"
                                                                                                                                                                        id="b-7">
                                                                                                                                                                        <table
                                                                                                                                                                            align="center"
                                                                                                                                                                            border="0"
                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                            width="100%"
                                                                                                                                                                            role="presentation"
                                                                                                                                                                            data-block-id="-7">
                                                                                                                                                                            <tbody>
                                                                                                                                                                                <tr
                                                                                                                                                                                    class="mceRow">
                                                                                                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                                                                                                                                        valign="top">
                                                                                                                                                                                        <table
                                                                                                                                                                                            border="0"
                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                            width="100%"
                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                <tr>
                                                                                                                                                                                                    <td valign="top"
                                                                                                                                                                                                        class="mceColumn"
                                                                                                                                                                                                        id="mceColumnId--29"
                                                                                                                                                                                                        data-block-id="-29"
                                                                                                                                                                                                        colspan="12"
                                                                                                                                                                                                        width="100%">
                                                                                                                                                                                                        <table
                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                    <td style="border:0;border-radius:0"
                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                        id="b27">
                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                            align="center"
                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                            role="presentation"
                                                                                                                                                                                                                            data-block-id="27">
                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                <tr
                                                                                                                                                                                                                                    class="mceRow">
                                                                                                                                                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                                                                                                                                                                                        valign="top">
                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                            cellspacing="24"
                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0"
                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                        class="mceColumn"
                                                                                                                                                                                                                                                        id="mceColumnId-30"
                                                                                                                                                                                                                                                        data-block-id="30"
                                                                                                                                                                                                                                                        colspan="12"
                                                                                                                                                                                                                                                        width="100%">
                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                        class="mceGutterContainer"
                                                                                                                                                                                                                                                                        id="gutterContainerId-29">
                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                            style="border-collapse:separate"
                                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                                        id="b29">
                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                                            style="border:0;background-color:#7b8b4c;border-radius:0;border-collapse:separate">
                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                                                                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                                                                                                                                                                                        <div data-block-id="29"
                                                                                                                                                                                                                                                                                                            class="mceText"
                                                                                                                                                                                                                                                                                                            id="d29"
                                                                                                                                                                                                                                                                                                            style="width:100%">
                                                                                                                                                                                                                                                                                                            <h3
                                                                                                                                                                                                                                                                                                                class="last-child">
                                                                                                                                                                                                                                                                                                                <span
                                                                                                                                                                                                                                                                                                                    style="color:#ffffff;">Vì
                                                                                                                                                                                                                                                                                                                    sao
                                                                                                                                                                                                                                                                                                                    bạn
                                                                                                                                                                                                                                                                                                                    nên
                                                                                                                                                                                                                                                                                                                    chọn
                                                                                                                                                                                                                                                                                                                    Préci?</span>
                                                                                                                                                                                                                                                                                                            </h3>
                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                        </table>
                                                                                                                                                                                                    </td>
                                                                                                                                                                                                </tr>
                                                                                                                                                                                            </tbody>
                                                                                                                                                                                        </table>
                                                                                                                                                                                    </td>
                                                                                                                                                                                </tr>
                                                                                                                                                                            </tbody>
                                                                                                                                                                        </table>
                                                                                                                                                                    </td>
                                                                                                                                                                </tr>
                                                                                                                                                            </tbody>
                                                                                                                                                        </table>
                                                                                                                                                    </td>
                                                                                                                                                </tr>
                                                                                                                                            </tbody>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </tbody>
                                                                                                                        </table>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                        valign="top"
                                                                                                        class="mceGutterContainer"
                                                                                                        id="gutterContainerId-5">
                                                                                                        <table
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            width="100%"
                                                                                                            style="border-collapse:separate"
                                                                                                            role="presentation">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                        valign="top"
                                                                                                                        id="b5">
                                                                                                                        <table
                                                                                                                            width="100%"
                                                                                                                            style="border:0;background-color:transparent;border-radius:0;border-collapse:separate">
                                                                                                                            <tbody>
                                                                                                                                <tr>
                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                        <div data-block-id="5"
                                                                                                                                            class="mceText"
                                                                                                                                            id="d5"
                                                                                                                                            style="width:100%">
                                                                                                                                            <p
                                                                                                                                                style="line-height: 0; mso-line-height-alt: 0%;">
                                                                                                                                                <br />
                                                                                                                                            </p>
                                                                                                                                            <p
                                                                                                                                                class="mcePastedContent">
                                                                                                                                                <span
                                                                                                                                                    style="color:rgb(0, 0, 0);"><span
                                                                                                                                                        style="font-size: 13pt"><span
                                                                                                                                                            style="font-family: &quot;Times New Roman&quot;, serif"><span
                                                                                                                                                                style="font-weight:normal;"><span
                                                                                                                                                                    style="background-color: transparent">✅</span></span></span></span></span>
                                                                                                                                                <strong>100%
                                                                                                                                                    sáp
                                                                                                                                                    ong
                                                                                                                                                    có
                                                                                                                                                    nguồn
                                                                                                                                                    gốc
                                                                                                                                                    tự
                                                                                                                                                    nhiên</strong>
                                                                                                                                                được
                                                                                                                                                khai
                                                                                                                                                thác
                                                                                                                                                từ
                                                                                                                                                trại
                                                                                                                                                nuôi
                                                                                                                                                ong
                                                                                                                                                bằng
                                                                                                                                                mật
                                                                                                                                                hoa
                                                                                                                                                tại
                                                                                                                                                Vĩnh
                                                                                                                                                Phúc.
                                                                                                                                            </p>
                                                                                                                                            <p
                                                                                                                                                style="line-height: 0; mso-line-height-alt: 0%;">
                                                                                                                                                <br />
                                                                                                                                            </p>
                                                                                                                                            <p
                                                                                                                                                class="mcePastedContent">
                                                                                                                                                <span
                                                                                                                                                    style="color:rgb(0, 0, 0);"><span
                                                                                                                                                        style="font-size: 13pt"><span
                                                                                                                                                            style="font-family: &quot;Times New Roman&quot;, serif"><span
                                                                                                                                                                style="font-weight:normal;"><span
                                                                                                                                                                    style="background-color: transparent">✅</span></span></span></span></span>
                                                                                                                                                Hương
                                                                                                                                                thơm
                                                                                                                                                quen
                                                                                                                                                thuộc
                                                                                                                                                gắn
                                                                                                                                                liền
                                                                                                                                                với
                                                                                                                                                đời
                                                                                                                                                sống
                                                                                                                                                của
                                                                                                                                                người
                                                                                                                                                dân
                                                                                                                                                Việt
                                                                                                                                                Nam,
                                                                                                                                                <strong>không
                                                                                                                                                    chứa
                                                                                                                                                    các
                                                                                                                                                    chất
                                                                                                                                                    gây
                                                                                                                                                    ung
                                                                                                                                                    thư,
                                                                                                                                                    đầy
                                                                                                                                                    đủ
                                                                                                                                                    giấy
                                                                                                                                                    tờ
                                                                                                                                                    pháp
                                                                                                                                                    lý.</strong>
                                                                                                                                            </p>
                                                                                                                                            <p
                                                                                                                                                style="line-height: 0; mso-line-height-alt: 0%;">
                                                                                                                                                <br />
                                                                                                                                            </p>
                                                                                                                                            <p
                                                                                                                                                class="mcePastedContent">
                                                                                                                                                <span
                                                                                                                                                    style="color:rgb(0, 0, 0);"><span
                                                                                                                                                        style="font-size: 13pt"><span
                                                                                                                                                            style="font-family: &quot;Times New Roman&quot;, serif"><span
                                                                                                                                                                style="font-weight:normal;"><span
                                                                                                                                                                    style="background-color: transparent">✅</span></span></span></span></span>
                                                                                                                                                <strong>Bấc
                                                                                                                                                    cotton
                                                                                                                                                    hoặc
                                                                                                                                                    bấc
                                                                                                                                                    gỗ
                                                                                                                                                    không
                                                                                                                                                    chứa
                                                                                                                                                    chì
                                                                                                                                                    hay
                                                                                                                                                    kim
                                                                                                                                                    loại
                                                                                                                                                    nặng
                                                                                                                                                    khác.</strong>
                                                                                                                                            </p>
                                                                                                                                            <p
                                                                                                                                                style="line-height: 0; mso-line-height-alt: 0%;">
                                                                                                                                                <br />
                                                                                                                                            </p>
                                                                                                                                            <p
                                                                                                                                                class="mcePastedContent">
                                                                                                                                                <span
                                                                                                                                                    style="color:rgb(0, 0, 0);"><span
                                                                                                                                                        style="font-size: 13pt"><span
                                                                                                                                                            style="font-family: &quot;Times New Roman&quot;, serif"><span
                                                                                                                                                                style="font-weight:normal;"><span
                                                                                                                                                                    style="background-color: transparent">✅</span></span></span></span></span>
                                                                                                                                                <strong>Khi
                                                                                                                                                    đốt
                                                                                                                                                    không
                                                                                                                                                    tạo
                                                                                                                                                    ra
                                                                                                                                                    khí
                                                                                                                                                    độc,
                                                                                                                                                    là
                                                                                                                                                    một
                                                                                                                                                    liệu
                                                                                                                                                    pháp
                                                                                                                                                    thư
                                                                                                                                                    giãn
                                                                                                                                                    tinh
                                                                                                                                                    thần
                                                                                                                                                    hiệu
                                                                                                                                                    quả.</strong>
                                                                                                                                            </p>
                                                                                                                                            <p
                                                                                                                                                style="line-height: 0; mso-line-height-alt: 0%;">
                                                                                                                                                <br />
                                                                                                                                            </p>
                                                                                                                                            <p
                                                                                                                                                class="mcePastedContent last-child">
                                                                                                                                                <span
                                                                                                                                                    style="color:rgb(0, 0, 0);"><span
                                                                                                                                                        style="font-size: 13pt"><span
                                                                                                                                                            style="font-family: &quot;Times New Roman&quot;, serif"><span
                                                                                                                                                                style="font-weight:normal;"><span
                                                                                                                                                                    style="background-color: transparent">✅</span></span></span></span></span><strong>
                                                                                                                                                    Từng
                                                                                                                                                    sản
                                                                                                                                                    phẩm
                                                                                                                                                    được
                                                                                                                                                    phối
                                                                                                                                                    trộn
                                                                                                                                                    hoàn
                                                                                                                                                    toàn
                                                                                                                                                    thủ
                                                                                                                                                    công</strong>
                                                                                                                                                dưới
                                                                                                                                                đôi
                                                                                                                                                bàn
                                                                                                                                                tay
                                                                                                                                                khéo
                                                                                                                                                léo
                                                                                                                                                của
                                                                                                                                                người
                                                                                                                                                thợ
                                                                                                                                                lành
                                                                                                                                                nghề.
                                                                                                                                            </p>
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </tbody>
                                                                                                                        </table>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td valign="top"
                                                                                                        class="mceGutterContainer"
                                                                                                        id="gutterContainerId-33">
                                                                                                        <table
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            width="100%"
                                                                                                            style="border-collapse:separate"
                                                                                                            role="presentation">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="padding-top:8px;padding-bottom:8px;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                        valign="top"
                                                                                                                        class="mceLayoutContainer"
                                                                                                                        id="b33">
                                                                                                                        <table
                                                                                                                            align="center"
                                                                                                                            border="0"
                                                                                                                            cellpadding="0"
                                                                                                                            cellspacing="0"
                                                                                                                            width="100%"
                                                                                                                            role="presentation"
                                                                                                                            data-block-id="33"
                                                                                                                            id="section_60fca6fbdba621ac6adebbb234c017a7"
                                                                                                                            class="mceLayout">
                                                                                                                            <tbody>
                                                                                                                                <tr
                                                                                                                                    class="mceRow">
                                                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                                                                                        valign="top">
                                                                                                                                        <table
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="0"
                                                                                                                                            width="100%"
                                                                                                                                            role="presentation">
                                                                                                                                            <tbody>
                                                                                                                                                <tr>
                                                                                                                                                    <td valign="top"
                                                                                                                                                        class="mceColumn"
                                                                                                                                                        id="mceColumnId--23"
                                                                                                                                                        data-block-id="-23"
                                                                                                                                                        colspan="12"
                                                                                                                                                        width="100%">
                                                                                                                                                        <table
                                                                                                                                                            border="0"
                                                                                                                                                            cellpadding="0"
                                                                                                                                                            cellspacing="0"
                                                                                                                                                            width="100%"
                                                                                                                                                            role="presentation">
                                                                                                                                                            <tbody>
                                                                                                                                                                <tr>
                                                                                                                                                                    <td style="border:0;border-radius:0"
                                                                                                                                                                        valign="top"
                                                                                                                                                                        align="center"
                                                                                                                                                                        id="b-9">
                                                                                                                                                                        <table
                                                                                                                                                                            align="center"
                                                                                                                                                                            border="0"
                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                            width="100%"
                                                                                                                                                                            role="presentation"
                                                                                                                                                                            data-block-id="-9">
                                                                                                                                                                            <tbody>
                                                                                                                                                                                <tr
                                                                                                                                                                                    class="mceRow">
                                                                                                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                                                                                                                                        valign="top">
                                                                                                                                                                                        <table
                                                                                                                                                                                            border="0"
                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                            width="100%"
                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                <tr>
                                                                                                                                                                                                    <td valign="top"
                                                                                                                                                                                                        class="mceColumn"
                                                                                                                                                                                                        id="mceColumnId--30"
                                                                                                                                                                                                        data-block-id="-30"
                                                                                                                                                                                                        colspan="12"
                                                                                                                                                                                                        width="100%">
                                                                                                                                                                                                        <table
                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                    <td style="border:0;border-radius:0"
                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                        id="b32">
                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                            align="center"
                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                            role="presentation"
                                                                                                                                                                                                                            data-block-id="32">
                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                <tr
                                                                                                                                                                                                                                    class="mceRow">
                                                                                                                                                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                                                                                                                                                                                        valign="top">
                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                            cellspacing="24"
                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0"
                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                        class="mceColumn"
                                                                                                                                                                                                                                                        id="mceColumnId-35"
                                                                                                                                                                                                                                                        data-block-id="35"
                                                                                                                                                                                                                                                        colspan="12"
                                                                                                                                                                                                                                                        width="100%">
                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                        class="mceGutterContainer"
                                                                                                                                                                                                                                                                        id="gutterContainerId-42">
                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                            style="border-collapse:separate"
                                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                                        id="b42">
                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                                            style="border:0;background-color:#7b8b4c;border-radius:0;border-collapse:separate">
                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                                                                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                                                                                                                                                                                        <div data-block-id="42"
                                                                                                                                                                                                                                                                                                            class="mceText"
                                                                                                                                                                                                                                                                                                            id="d42"
                                                                                                                                                                                                                                                                                                            style="width:100%">
                                                                                                                                                                                                                                                                                                            <h3
                                                                                                                                                                                                                                                                                                                class="last-child">
                                                                                                                                                                                                                                                                                                                <span
                                                                                                                                                                                                                                                                                                                    style="color:#ffffff;">Khách
                                                                                                                                                                                                                                                                                                                    hàng
                                                                                                                                                                                                                                                                                                                    nói
                                                                                                                                                                                                                                                                                                                    gì
                                                                                                                                                                                                                                                                                                                    về
                                                                                                                                                                                                                                                                                                                    Préci</span>
                                                                                                                                                                                                                                                                                                            </h3>
                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                        </table>
                                                                                                                                                                                                    </td>
                                                                                                                                                                                                </tr>
                                                                                                                                                                                            </tbody>
                                                                                                                                                                                        </table>
                                                                                                                                                                                    </td>
                                                                                                                                                                                </tr>
                                                                                                                                                                            </tbody>
                                                                                                                                                                        </table>
                                                                                                                                                                    </td>
                                                                                                                                                                </tr>
                                                                                                                                                            </tbody>
                                                                                                                                                        </table>
                                                                                                                                                    </td>
                                                                                                                                                </tr>
                                                                                                                                            </tbody>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </tbody>
                                                                                                                        </table>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td style="background-color:transparent;padding-top:12px;padding-bottom:12px;padding-right:24px;padding-left:24px;border:0;border-radius:0"
                                                                                                        valign="top"
                                                                                                        class="mceImageBlockContainer"
                                                                                                        align="center"
                                                                                                        id="b61">
                                                                                                        <div>
                                                                                                            <!--[if !mso]><!-->
                                                                                                        </div>
                                                                                                        <table
                                                                                                            align="center"
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            width="85%"
                                                                                                            style="border-collapse:separate;margin:0;vertical-align:top;max-width:85%;width:85%;height:auto"
                                                                                                            role="presentation"
                                                                                                            data-testid="image-61">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="border:0;border-radius:0;margin:0"
                                                                                                                        valign="top">
                                                                                                                        <img alt=""
                                                                                                                            src="https://mcusercontent.com/9ff0301507dcd31784caa6f9c/images/44da85cc-a78e-de74-511b-c78472655a79.png"
                                                                                                                            width="520.1999999999999"
                                                                                                                            height="auto"
                                                                                                                            style="display:block;max-width:100%;height:auto;border-radius:0"
                                                                                                                            class="imageDropZone mceImage"
                                                                                                                            data-block-id="61" />
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                        <div>
                                                                                                            <!--<![endif]-->
                                                                                                        </div>
                                                                                                        <div>
                                                                                                            <!--[if mso]>
<span class="mceImageBorder" style="border:0;border-width:2px;vertical-align:top;margin:0"><img role="presentation" class="imageDropZone mceImage" src="https://mcusercontent.com/9ff0301507dcd31784caa6f9c/images/44da85cc-a78e-de74-511b-c78472655a79.png" alt="" width="520.1999999999999" height="auto" style="display:block;max-width:520.1999999999999px;width:520.1999999999999px;height:auto"/></span>
<![endif]-->
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td style="background-color:transparent;padding-top:20px;padding-bottom:20px;padding-right:24px;padding-left:24px;border:0;border-radius:0"
                                                                                                        valign="top"
                                                                                                        class="mceDividerBlockContainer"
                                                                                                        id="b8">
                                                                                                        <table
                                                                                                            align="center"
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            width="100%"
                                                                                                            style="background-color:transparent;width:100%"
                                                                                                            role="presentation"
                                                                                                            class="mceDividerContainer"
                                                                                                            data-block-id="8">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="min-width:100%;border-top-width:2px;border-top-style:solid;border-top-color:#000000;line-height:0;font-size:0"
                                                                                                                        valign="top"
                                                                                                                        class="mceDividerBlock">
                                                                                                                         
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                                                        valign="top"
                                                                                                        class="mceGutterContainer"
                                                                                                        id="gutterContainerId-37">
                                                                                                        <table
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            width="100%"
                                                                                                            style="border-collapse:separate"
                                                                                                            role="presentation">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                        valign="top"
                                                                                                                        id="b37">
                                                                                                                        <table
                                                                                                                            width="100%"
                                                                                                                            style="border:0;background-color:#715136;border-radius:0;border-collapse:separate">
                                                                                                                            <tbody>
                                                                                                                                <tr>
                                                                                                                                    <td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px"
                                                                                                                                        class="mceTextBlockContainer">
                                                                                                                                        <div data-block-id="37"
                                                                                                                                            class="mceText"
                                                                                                                                            id="d37"
                                                                                                                                            style="width:100%">
                                                                                                                                            <p
                                                                                                                                                style="text-align: left;">
                                                                                                                                                <span
                                                                                                                                                    style="color:#ffffff;">Nếu
                                                                                                                                                    còn
                                                                                                                                                    câu
                                                                                                                                                    hỏi
                                                                                                                                                    nào
                                                                                                                                                    cho
                                                                                                                                                    Préci,
                                                                                                                                                    các
                                                                                                                                                    bạn
                                                                                                                                                    có
                                                                                                                                                    thể
                                                                                                                                                    liên
                                                                                                                                                    hệ
                                                                                                                                                    qua:</span>
                                                                                                                                            </p>
                                                                                                                                            <ul
                                                                                                                                                class="last-child">
                                                                                                                                                <li
                                                                                                                                                    style="color: #ffffff; text-align: left;">
                                                                                                                                                    <p
                                                                                                                                                        style="text-align: left;">
                                                                                                                                                        <span
                                                                                                                                                            style="color:#ffffff;">Fanpage:
                                                                                                                                                        </span><a
                                                                                                                                                            href="https://www.facebook.com/profile.php?id=61587106565203"
                                                                                                                                                            target="_blank"
                                                                                                                                                            style="color: #000000;"><strong><span
                                                                                                                                                                    style="background-color: #fae1b5">Préci
                                                                                                                                                                    -
                                                                                                                                                                    Nến
                                                                                                                                                                    thơm
                                                                                                                                                                    customize</span></strong></a>
                                                                                                                                                    </p>
                                                                                                                                                </li>
                                                                                                                                                <li
                                                                                                                                                    style="color: #ffffff; text-align: left;">
                                                                                                                                                    <p
                                                                                                                                                        style="text-align: left;">
                                                                                                                                                        <span
                                                                                                                                                            style="color:#ffffff;">Số
                                                                                                                                                            điện
                                                                                                                                                            thoại:
                                                                                                                                                            (+84)916.446.265
                                                                                                                                                            (Tuyết
                                                                                                                                                            Băng)</span>
                                                                                                                                                    </p>
                                                                                                                                                </li>
                                                                                                                                                <li
                                                                                                                                                    style="color: #ffffff; text-align: left;">
                                                                                                                                                    <p
                                                                                                                                                        style="text-align: left;">
                                                                                                                                                        <span
                                                                                                                                                            style="color:#ffffff;">Email:
                                                                                                                                                            <span
                                                                                                                                                                style="text-decoration:underline;">preci.nenthom@gmail.com</span></span>
                                                                                                                                                    </p>
                                                                                                                                                </li>
                                                                                                                                            </ul>
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </tbody>
                                                                                                                        </table>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td valign="top"
                                                                                                        class="mceGutterContainer"
                                                                                                        id="gutterContainerId-40">
                                                                                                        <table
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            width="100%"
                                                                                                            style="border-collapse:separate"
                                                                                                            role="presentation">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="background-color:#715136;padding-top:8px;padding-bottom:8px;padding-right:0;padding-left:0;border:0;border-radius:0"
                                                                                                                        valign="top"
                                                                                                                        class="mceLayoutContainer"
                                                                                                                        id="b40">
                                                                                                                        <table
                                                                                                                            align="center"
                                                                                                                            border="0"
                                                                                                                            cellpadding="0"
                                                                                                                            cellspacing="0"
                                                                                                                            width="100%"
                                                                                                                            role="presentation"
                                                                                                                            data-block-id="40"
                                                                                                                            id="section_dabdc59338438fae387abbd919da6326"
                                                                                                                            class="mceLayout">
                                                                                                                            <tbody>
                                                                                                                                <tr
                                                                                                                                    class="mceRow">
                                                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                                                                                        valign="top">
                                                                                                                                        <table
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="0"
                                                                                                                                            width="100%"
                                                                                                                                            role="presentation">
                                                                                                                                            <tbody>
                                                                                                                                                <tr>
                                                                                                                                                    <td valign="top"
                                                                                                                                                        class="mceColumn"
                                                                                                                                                        id="mceColumnId--24"
                                                                                                                                                        data-block-id="-24"
                                                                                                                                                        colspan="12"
                                                                                                                                                        width="100%">
                                                                                                                                                        <table
                                                                                                                                                            border="0"
                                                                                                                                                            cellpadding="0"
                                                                                                                                                            cellspacing="0"
                                                                                                                                                            width="100%"
                                                                                                                                                            role="presentation">
                                                                                                                                                            <tbody>
                                                                                                                                                                <tr>
                                                                                                                                                                    <td style="border:0;border-radius:0"
                                                                                                                                                                        valign="top"
                                                                                                                                                                        align="center"
                                                                                                                                                                        id="b-11">
                                                                                                                                                                        <table
                                                                                                                                                                            align="center"
                                                                                                                                                                            border="0"
                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                            width="100%"
                                                                                                                                                                            role="presentation"
                                                                                                                                                                            data-block-id="-11">
                                                                                                                                                                            <tbody>
                                                                                                                                                                                <tr
                                                                                                                                                                                    class="mceRow">
                                                                                                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                                                                                                                                        valign="top">
                                                                                                                                                                                        <table
                                                                                                                                                                                            border="0"
                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                            width="100%"
                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                <tr>
                                                                                                                                                                                                    <td valign="top"
                                                                                                                                                                                                        class="mceColumn"
                                                                                                                                                                                                        id="mceColumnId--31"
                                                                                                                                                                                                        data-block-id="-31"
                                                                                                                                                                                                        colspan="12"
                                                                                                                                                                                                        width="100%">
                                                                                                                                                                                                        <table
                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                    <td style="border:0;border-radius:0"
                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                        id="b39">
                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                            align="center"
                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                            role="presentation"
                                                                                                                                                                                                                            data-block-id="39">
                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                <tr
                                                                                                                                                                                                                                    class="mceRow">
                                                                                                                                                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                                                                                                                                                                                        valign="top">
                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                            cellspacing="24"
                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                    <td style="padding-top:0;padding-bottom:0"
                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                        class="mceColumn"
                                                                                                                                                                                                                                                        id="mceColumnId-38"
                                                                                                                                                                                                                                                        data-block-id="38"
                                                                                                                                                                                                                                                        colspan="12"
                                                                                                                                                                                                                                                        width="100%">
                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                    <td style="background-color:#715136;padding-top:12px;padding-bottom:12px;padding-right:16px;padding-left:16px;border:0;border-radius:0"
                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                        id="b9">
                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                            align="center"
                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                            role="presentation"
                                                                                                                                                                                                                                                                            data-block-id="9">
                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                <tr
                                                                                                                                                                                                                                                                                    class="mceRow">
                                                                                                                                                                                                                                                                                    <td style="background-color:#715136;background-position:center;background-repeat:no-repeat;background-size:cover;padding-top:0px;padding-bottom:0px"
                                                                                                                                                                                                                                                                                        valign="top">
                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                                            cellspacing="24"
                                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                    <td valign="top"
                                                                                                                                                                                                                                                                                                        class="mceColumn"
                                                                                                                                                                                                                                                                                                        id="mceColumnId--3"
                                                                                                                                                                                                                                                                                                        data-block-id="-3"
                                                                                                                                                                                                                                                                                                        colspan="12"
                                                                                                                                                                                                                                                                                                        width="100%">
                                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                                                            width="100%"
                                                                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                                    <td style="border:0;border-radius:0"
                                                                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                                                                        class="mceSocialFollowBlockContainer"
                                                                                                                                                                                                                                                                                                                        id="b-2">
                                                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                                                            align="center"
                                                                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                                                                            role="presentation"
                                                                                                                                                                                                                                                                                                                            class="mceSocialFollowBlock"
                                                                                                                                                                                                                                                                                                                            data-block-id="-2">
                                                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                                                    <td valign="middle"
                                                                                                                                                                                                                                                                                                                                        align="center">
                                                                                                                                                                                                                                                                                                                                        <!--[if mso]><table align="left" border="0" cellspacing= "0" cellpadding="0"><tr><![endif]--><!--[if mso]><td align="center" valign="top"><![endif]-->
                                                                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                                                                            align="left"
                                                                                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                                                                                            style="display:inline;float:left"
                                                                                                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                                                                    <td style="padding-top:3px;padding-bottom:3px;padding-left:12px;padding-right:12px"
                                                                                                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                                                                                                        class="mceSocialFollowIcon"
                                                                                                                                                                                                                                                                                                                                                        align="center"
                                                                                                                                                                                                                                                                                                                                                        width="40">
                                                                                                                                                                                                                                                                                                                                                        <a href="https://www.facebook.com/profile.php?id=61587106565203"
                                                                                                                                                                                                                                                                                                                                                            target="_blank"
                                                                                                                                                                                                                                                                                                                                                            rel="noreferrer"><img
                                                                                                                                                                                                                                                                                                                                                                class="mceSocialFollowImage"
                                                                                                                                                                                                                                                                                                                                                                width="40"
                                                                                                                                                                                                                                                                                                                                                                height="40"
                                                                                                                                                                                                                                                                                                                                                                alt="Facebook icon"
                                                                                                                                                                                                                                                                                                                                                                src="https://cdn-images.mailchimp.com/icons/social-block-v3/block-icons-v3/facebook-filled-light-40.png" /></a>
                                                                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                                                                        <!--[if mso]></td><![endif]--><!--[if mso]><td align="center" valign="top"><![endif]-->
                                                                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                                                                            align="left"
                                                                                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                                                                                            style="display:inline;float:left"
                                                                                                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                                                                    <td style="padding-top:3px;padding-bottom:3px;padding-left:12px;padding-right:12px"
                                                                                                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                                                                                                        class="mceSocialFollowIcon"
                                                                                                                                                                                                                                                                                                                                                        align="center"
                                                                                                                                                                                                                                                                                                                                                        width="40">
                                                                                                                                                                                                                                                                                                                                                        <a href="https://www.instagram.com/preci005?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                                                                                                                                                                                                                                                                                                                                            target="_blank"
                                                                                                                                                                                                                                                                                                                                                            rel="noreferrer"><img
                                                                                                                                                                                                                                                                                                                                                                class="mceSocialFollowImage"
                                                                                                                                                                                                                                                                                                                                                                width="40"
                                                                                                                                                                                                                                                                                                                                                                height="40"
                                                                                                                                                                                                                                                                                                                                                                alt="Instagram icon"
                                                                                                                                                                                                                                                                                                                                                                src="https://cdn-images.mailchimp.com/icons/social-block-v3/block-icons-v3/instagram-filled-light-40.png" /></a>
                                                                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                                                                        <!--[if mso]></td><![endif]--><!--[if mso]><td align="center" valign="top"><![endif]-->
                                                                                                                                                                                                                                                                                                                                        <table
                                                                                                                                                                                                                                                                                                                                            align="left"
                                                                                                                                                                                                                                                                                                                                            border="0"
                                                                                                                                                                                                                                                                                                                                            cellpadding="0"
                                                                                                                                                                                                                                                                                                                                            cellspacing="0"
                                                                                                                                                                                                                                                                                                                                            style="display:inline;float:left"
                                                                                                                                                                                                                                                                                                                                            role="presentation">
                                                                                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                                                                    <td style="padding-top:3px;padding-bottom:3px;padding-left:12px;padding-right:12px"
                                                                                                                                                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                                                                                                                                                        class="mceSocialFollowIcon"
                                                                                                                                                                                                                                                                                                                                                        align="center"
                                                                                                                                                                                                                                                                                                                                                        width="40">
                                                                                                                                                                                                                                                                                                                                                        <a href="https://preci-candle.vercel.app/"
                                                                                                                                                                                                                                                                                                                                                            target="_blank"
                                                                                                                                                                                                                                                                                                                                                            rel="noreferrer"><img
                                                                                                                                                                                                                                                                                                                                                                class="mceSocialFollowImage"
                                                                                                                                                                                                                                                                                                                                                                width="40"
                                                                                                                                                                                                                                                                                                                                                                height="40"
                                                                                                                                                                                                                                                                                                                                                                alt="Website icon"
                                                                                                                                                                                                                                                                                                                                                                src="https://cdn-images.mailchimp.com/icons/social-block-v3/block-icons-v3/website-filled-light-40.png" /></a>
                                                                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                                                                        <!--[if mso]></td><![endif]--><!--[if mso]></tr></table><![endif]-->
                                                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                        </table>
                                                                                                                                                                                                    </td>
                                                                                                                                                                                                </tr>
                                                                                                                                                                                            </tbody>
                                                                                                                                                                                        </table>
                                                                                                                                                                                    </td>
                                                                                                                                                                                </tr>
                                                                                                                                                                            </tbody>
                                                                                                                                                                        </table>
                                                                                                                                                                    </td>
                                                                                                                                                                </tr>
                                                                                                                                                            </tbody>
                                                                                                                                                        </table>
                                                                                                                                                    </td>
                                                                                                                                                </tr>
                                                                                                                                            </tbody>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </tbody>
                                                                                                                        </table>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                                    </td>
                                </tr>
                            </tbody>
                            <tbody data-block-id="17" class="mceWrapper">
                                <tr>
                                    <td style="background-color:#dbbfa9" valign="top" align="center"
                                        class="mceSection17">
                                        <!--[if (gte mso 9)|(IE)]><table align="center" border="0" cellspacing="0" cellpadding="0" width="660" style="width:660px;"><tr><td><![endif]-->
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                            style="max-width:660px" role="presentation">
                                            <tbody>
                                                <tr>
                                                    <td style="background-color:#ffffff" valign="top"
                                                        class="mceWrapperInner">
                                                        <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                            width="100%" role="presentation" data-block-id="16">
                                                            <tbody>
                                                                <tr class="mceRow">
                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                        valign="top">
                                                                        <table border="0" cellpadding="0"
                                                                            cellspacing="0" width="100%"
                                                                            role="presentation">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style="padding-top:0;padding-bottom:0"
                                                                                        valign="top" class="mceColumn"
                                                                                        id="mceColumnId--20"
                                                                                        data-block-id="-20" colspan="12"
                                                                                        width="100%">
                                                                                        <table border="0"
                                                                                            cellpadding="0"
                                                                                            cellspacing="0" width="100%"
                                                                                            role="presentation">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="background-color:#ffffff;padding-top:12px;padding-bottom:12px;padding-right:24px;padding-left:24px;border:0;border-radius:0"
                                                                                                        valign="top"
                                                                                                        class="mceImageBlockContainer"
                                                                                                        align="center"
                                                                                                        id="b41">
                                                                                                        <div>
                                                                                                            <!--[if !mso]><!-->
                                                                                                        </div>
                                                                                                        <table
                                                                                                            align="center"
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            width="100%"
                                                                                                            style="border-collapse:separate;margin:0;vertical-align:top;max-width:150px;width:100%;height:auto"
                                                                                                            role="presentation"
                                                                                                            data-testid="image-41">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="border:0;border-radius:0;margin:0"
                                                                                                                        valign="top">
                                                                                                                        <img alt=""
                                                                                                                            src="https://brand-assets.mailchimp.com/01KJCRQHVJ60S4WXKE1K1CB9JK.png"
                                                                                                                            width="150"
                                                                                                                            height="auto"
                                                                                                                            style="display:block;max-width:100%;height:auto;border-radius:0"
                                                                                                                            class="imageDropZone mceLogo"
                                                                                                                            data-block-id="41" />
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                        <div>
                                                                                                            <!--<![endif]-->
                                                                                                        </div>
                                                                                                        <div>
                                                                                                            <!--[if mso]>
<span class="mceImageBorder" style="border:0;border-width:2px;vertical-align:top;margin:0"><img role="presentation" class="imageDropZone mceLogo" src="https://brand-assets.mailchimp.com/01KJCRQHVJ60S4WXKE1K1CB9JK.png" alt="" width="150" height="auto" style="display:block;max-width:150px;width:150px;height:auto"/></span>
<![endif]-->
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </center>
    <script type="text/javascript" src="/EIPOMIep/1kE/ZoV/2P-zITNUxP/3cm3cSzzk4Jhmz/XgtkODEzAw/U0EfB/GN5GQ4B"></script>
</body>

</html>
`;