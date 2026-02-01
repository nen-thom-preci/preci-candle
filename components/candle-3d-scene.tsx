'use client'

import { useEffect, useMemo, useRef, Suspense } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows, Text as Text3D, Html, useProgress } from '@react-three/drei'
import * as THREE from 'three'

interface Candle3DProps {
  shape: string
  color: string
  sticker: boolean
  base: string
  message: string
  engraving?: string
  isQRCode?: boolean;
}

// 1. BẢNG MÀU
const colorMap: Record<string, { wax: string; label: string }> = {
  beige: { wax: '#FDF5E6', label: '#FFFDFA' },
  beeswax: { wax: '#E9D66B', label: '#715136' },
  paraffin: { wax: '#F9F9F9', label: '#3A3A3A' },
  palm: { wax: '#FCFBE3', label: '#7B8B4C' },
  sagegreen: { wax: '#B2AC88', label: '#7B8B4C' },
  dustyrose: { wax: '#DCAE96', label: '#715136' },
  lavender: { wax: '#E6E6FA', label: '#3A3A3A' },
  terracotta: { wax: '#E2725B', label: '#715136' },
  sand: { wax: '#C2B280', label: '#715136' },
  charcoal: { wax: '#36454F', label: '#FFFDFA' },
  forestgreen: { wax: '#224225', label: '#FFFDFA' },
  burgundy: { wax: '#800020', label: '#FFFDFA' },
}

// Cấu hình bề mặt để tính toán vị trí khắc tên
const SURFACE_CONFIG: Record<string, { radius: number, heightRange: [number, number], tilt?: number }> = {
  round: { radius: 0.6, heightRange: [-0.5, 0.5] },
  square: { radius: 0.65, heightRange: [-0.5, 0.5] },
  hexagon: { radius: 0.55, heightRange: [-0.5, 0.5] },
  pyramid: { radius: 0.45, heightRange: [-0.8, -0.2], tilt: -0.2 },
  taper: { radius: 0.5, heightRange: [-0.5, 0.2] },
  oval: { radius: 0.6, heightRange: [-0.5, 0.5] }
}

// Cấu hình vị trí nhãn dán
const STICKER_CONFIG: Record<string, { pos: [number, number, number]; rot: [number, number, number]; scale?: [number, number, number] }> = {
  round: { pos: [0, 0.1, 0.61], rot: [0, 0, 0] },
  square: { pos: [0, 0.1, 0.61], rot: [0, 0, 0] },
  hexagon: { pos: [0, 0.1, 0.53], rot: [0, 0, 0] },
  pyramid: { pos: [0, -0.3, 0.48], rot: [-0.36, 0, 0], scale: [0.7, 0.7, 1] },
  taper: { pos: [0, -0.1, 0.55], rot: [0, 0, 0] },
  oval: { pos: [0, 0.1, 0.49], rot: [0, 0, 0] }
}

// --- BỘ SƯU TẬP ĐẾ NẾN (CANDLE BASES) ---

// --- CẬP NHẬT GIAO DIỆN ĐẾ NẾN (REALISTIC & TEXT-FRIENDLY) ---

// 1. Đế Gỗ Mộc (Wood) - Giữ nguyên form nhưng tinh chỉnh vật liệu
function BaseWood() {
  return (
    <group position={[0, -1.2, 0]}>
      <mesh receiveShadow castShadow>
        <cylinderGeometry args={[0.95, 0.95, 0.15, 64]} />
        {/* map={texture} nếu có sẽ đẹp hơn, ở đây ta giả lập bằng màu và độ nhám */}
        <meshStandardMaterial
          color="#5C4033"
          roughness={0.8}
          metalness={0}
        />
      </mesh>
      {/* Vân gỗ tâm (Giả lập) */}
      <mesh position={[0, 0.08, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0, 0.85, 32]} />
        <meshStandardMaterial color="#6F4E37" roughness={1} />
      </mesh>
    </group>
  )
}

// 2. Đế Đá Cẩm Thạch (Marble) - Đổi sang hình TRỤ TRÒN để chữ bám đều
function BaseMarble() {
  return (
    <group position={[0, -1.2, 0]}>
      <mesh receiveShadow castShadow>
        {/* Sửa: Đổi từ 8 cạnh (bát giác) sang 64 cạnh (tròn) để chữ không bị gãy góc */}
        {/* Sửa: Tăng độ dày lên 0.18 cho đầm tay */}
        <cylinderGeometry args={[0.95, 0.95, 0.18, 64]} />

        {/* Nâng cấp Material: Giả lập đá bóng (Polished Stone) */}
        <meshPhysicalMaterial
          color="#F9F9F9"       // Trắng sứ
          roughness={0.05}      // Rất bóng
          metalness={0.1}
          clearcoat={1}         // Lớp phủ bóng kính
          clearcoatRoughness={0.1}
          transmission={0.1}    // Hơi trong suốt nhẹ kiểu ngọc
          thickness={0.5}
        />
      </mesh>

      {/* Viền kim loại mỏng sang trọng ở đáy */}
      <mesh position={[0, -0.08, 0]}>
        <cylinderGeometry args={[0.96, 0.96, 0.02, 64]} />
        <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} />
      </mesh>
    </group>
  )
}

// 3. Đế Gốm Thủ Công (Ceramic) - Đổi sang dáng TRỤ THẲNG (không loe)
function BaseCeramic() {
  return (
    <group position={[0, -1.2, 0]}>
      {/* Thân chính: Làm thẳng đứng (1.0 - 1.0) thay vì loe (1.0 - 0.8) để dán chữ */}
      <mesh receiveShadow castShadow>
        <cylinderGeometry args={[1.0, 1.0, 0.18, 64]} />

        {/* Nâng cấp Material: Gốm nung (Terracotta/Clay) */}
        <meshStandardMaterial
          color="#DCAE96"   // Màu hồng đất
          roughness={0.6}   // Độ nhám cao (lì)
          metalness={0}     // Không kim loại
        />
      </mesh>

      {/* Bo tròn mép trên cho mềm mại (nhìn đỡ cứng) */}
      <mesh position={[0, 0.09, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.98, 0.02, 16, 64]} />
        <meshStandardMaterial color="#DCAE96" roughness={0.6} />
      </mesh>

      {/* Bo tròn mép dưới */}
      <mesh position={[0, -0.09, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.98, 0.02, 16, 64]} />
        <meshStandardMaterial color="#C89078" roughness={0.6} />
      </mesh>
    </group>
  )
}

// 4. MAIN COMPONENT (Bản đầy đủ tính năng)
function ProceduralsCandle({ shape, color, sticker, base, message, engraving, isQRCode }: Candle3DProps) {
  const surface = SURFACE_CONFIG[shape] || SURFACE_CONFIG['round'];
  const stickerConfig = STICKER_CONFIG[shape] || STICKER_CONFIG['round'];

  const materialProps = {
    color: colorMap[color]?.wax || '#F5E6D3',
    roughness: 0.15,
    metalness: 0.02,
    clearcoat: 0.4,
    clearcoatRoughness: 0.2
  };

  const labelTexture = useMemo(() => {
    if (!sticker) return null;
    const canvas = document.createElement('canvas');
    canvas.width = 1024; canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // 1. Nền & Viền
    ctx.fillStyle = '#FFFDFA'; ctx.beginPath(); ctx.roundRect(50, 200, 924, 624, 30); ctx.fill();
    ctx.strokeStyle = '#715136'; ctx.lineWidth = 6; ctx.stroke();

    // 2. Tên thương hiệu
    ctx.fillStyle = '#715136';
    ctx.font = 'bold 200px Mallong, serif';
    ctx.textAlign = 'center';
    ctx.fillText("Préci", 512, 380);

    // 3. Thông điệp người dùng (Cỡ chữ to & rõ)
    // ... (Code cũ phần 1 và 2 giữ nguyên) ...
    ctx.textAlign = 'center';
    ctx.fillText("Préci", 512, 380);

    // --- 3. BẮT ĐẦU ĐOẠN CODE MỚI ---

    // Kiểm tra: Nếu là chế độ QR Code
    if (isQRCode) {
      // Vẽ mã QR giả lập (Hình vuông lớn + các điểm chấm)
      const qrSize = 300;
      const qrX = 512 - qrSize / 2;
      const qrY = 450;

      ctx.fillStyle = '#715136'; // Màu nâu

      // Vẽ khung
      ctx.lineWidth = 4;
      ctx.strokeRect(qrX, qrY, qrSize, qrSize);

      // Vẽ các chấm ngẫu nhiên để mô phỏng QR
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          // Random vẽ các ô vuông nhỏ
          if (Math.random() > 0.5) {
            ctx.fillRect(qrX + i * 30, qrY + j * 30, 25, 25);
          }
        }
      }
      // Chú thích dưới mã
      ctx.font = 'bold 40px Arial';
      ctx.fillText("SCAN TO LISTEN", 512, qrY + qrSize + 60);

    } else if (message) {
      // Logic cũ: Vẽ văn bản (Nếu không phải QR)
      ctx.fillStyle = '#715136';
      ctx.font = 'bold 100px Mallong';

      const words = message.split(' ');
      let line = '';
      let y = 510;
      const lineHeight = 100;
      const maxWidth = 800;

      words.forEach(word => {
        const testLine = line + word + ' ';
        if (ctx.measureText(testLine).width > maxWidth) {
          ctx.fillText(line, 512, y);
          line = word + ' ';
          y += lineHeight;
        } else {
          line = testLine;
        }
      });
      ctx.fillText(line, 512, y);
    }
    // --- KẾT THÚC ĐOẠN CODE MỚI ---

    return new THREE.CanvasTexture(canvas);

    // QUAN TRỌNG: Thêm isQRCode vào danh sách theo dõi ở cuối useMemo
  }, [message, color, sticker, isQRCode]);

  return (
    <group>
      {/* THÂN NẾN */}
      <group position={[0, -0.2, 0]}>
        {shape === 'square' && <mesh castShadow receiveShadow><boxGeometry args={[1.2, 1.8, 1.2]} /><meshPhysicalMaterial {...materialProps} /></mesh>}
        {shape === 'round' && <mesh castShadow receiveShadow><cylinderGeometry args={[0.6, 0.6, 1.8, 48]} /><meshPhysicalMaterial {...materialProps} /></mesh>}
        {shape === 'hexagon' && <mesh castShadow receiveShadow rotation={[0, Math.PI / 6, 0]}><cylinderGeometry args={[0.6, 0.6, 1.8, 6]} /><meshPhysicalMaterial {...materialProps} /></mesh>}
        {shape === 'pyramid' && <mesh castShadow receiveShadow><cylinderGeometry args={[0, 0.9, 1.8, 4]} /><meshPhysicalMaterial {...materialProps} /></mesh>}
        {shape === 'taper' && <group><mesh castShadow receiveShadow><cylinderGeometry args={[0.42, 0.65, 1.8, 48]} /><meshPhysicalMaterial {...materialProps} /></mesh><mesh position={[0, 0.75, 0]}><cylinderGeometry args={[0.32, 0.42, 0.3, 32]} /><meshPhysicalMaterial {...materialProps} /></mesh></group>}
        {shape === 'oval' && <mesh castShadow receiveShadow scale={[1.2, 1, 0.8]}><cylinderGeometry args={[0.6, 0.6, 1.8, 48]} /><meshPhysicalMaterial {...materialProps} /></mesh>}
      </group>

      {/* NGỌN LỬA */}
      <group position={[0, 0.8, 0]}>
        <mesh castShadow position={[0, 0, 0]}><cylinderGeometry args={[0.05, 0.05, 0.3, 12]} /><meshPhysicalMaterial color="#3a3a3a" roughness={0.6} metalness={0.1} /></mesh>
        <mesh position={[0, 0.25, 0]}><coneGeometry args={[0.08, 0.25, 16]} /><meshBasicMaterial color="#FFD27D" /></mesh>
        <mesh position={[0, 0.3, 0]}><sphereGeometry args={[0.12, 16, 16]} /><meshBasicMaterial color="#FF9F43" transparent opacity={0.35} /></mesh>
      </group>

      {/* STICKER */}
      {sticker && labelTexture && (
        <mesh position={new THREE.Vector3(...stickerConfig.pos)} rotation={new THREE.Euler(...stickerConfig.rot)} scale={stickerConfig.scale ? new THREE.Vector3(...stickerConfig.scale) : new THREE.Vector3(1, 1, 1)}>
          <planeGeometry args={[0.85, 0.85]} /><meshPhysicalMaterial map={labelTexture} transparent roughness={0.1} metalness={0.1} polygonOffset polygonOffsetFactor={-1} />
        </mesh>
      )}

      {/* LOGIC KHẮC TÊN */}
      {base !== 'none' && engraving && (() => {
        const baseX = 0;
        const baseY = base === 'gold' ? -1.22 : -1.2;
        const baseR = base === 'wood' ? 0.95 : base === 'marble' ? 0.95 : base === 'ceramic' ? 1.0 : 0.85;
        const baseZ = baseR + 0.01;

        let fontSize = base === 'gold' ? 0.08 : 0.12;
        const threshold = 8;
        if (engraving.length > threshold) {
          fontSize = Math.max(fontSize * (threshold / engraving.length), 0.05);
        }

        return (
          <group rotation={[0, 0, 0]} position={[baseX, baseY, baseZ] as any}>
            <Text3D
              position={[0, 0, -0.005]}
              fontSize={fontSize * 1.05}
              font="/fonts/CormorantGaramond-Light.ttf"
              letterSpacing={0.05}
              anchorX="center"
              anchorY="middle"
            >
              {engraving}
              <meshBasicMaterial color="#3d2514" />
            </Text3D>

            <Text3D
              position={[0, 0, 0.005]}
              fontSize={fontSize}
              font="/fonts/CormorantGaramond-Light.ttf"
              letterSpacing={0.05}
              anchorX="center"
              anchorY="middle"
            >
              {engraving}
              <meshStandardMaterial
                color="#C0C0C0"
                emissive="#C0C0C0"
                emissiveIntensity={0.8}
                metalness={1}
                roughness={0.05}
              />
            </Text3D>
          </group>
        )
      })()}

      {/* RENDER ĐẾ NẾN */}
      {base === 'wood' && <BaseWood />}
      {base === 'marble' && <BaseMarble />}
      {base === 'ceramic' && <BaseCeramic />}
    </group>
  )
}

// 3. COMPONENT LOADER (Hiển thị % tải)
function Loader() {
  const { progress } = useProgress()
  return <Html center><span style={{ color: '#715136', fontFamily: 'serif' }}>{progress.toFixed(0)}% loaded</span></Html>
}

export function Candle3D(props: Candle3DProps) {
  return (
    <Canvas className="w-full h-full" dpr={[1, 2]} shadows gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}>
      {/* 4. QUAN TRỌNG: Bao bọc mọi thứ trong Suspense */}
      <Suspense fallback={<Loader />}>
        <color attach="background" args={['#F5F2EB']} />

        <directionalLight position={[4, 5, 3]} intensity={1.2} castShadow shadow-mapSize={[2048, 2048]} />
        <directionalLight position={[-3, 2, 3]} intensity={0.6} color="#ffffff" />
        <directionalLight position={[2, 1, -4]} intensity={0.4} color="#f0e6d2" />
        <directionalLight position={[0, 3, -5]} intensity={0.3} color="#ffffff" />

        <Environment preset="studio" {...({ environmentIntensity: 0.8 } as any)} />

        <ProceduralsCandle {...props} />

        <ContactShadows position={[0, -1.5, 0]} scale={3} blur={2.5} far={4} opacity={0.4} />
        <OrbitControls
          enableDamping
          autoRotate
          autoRotateSpeed={1.5}
          rotateSpeed={2.5}
          minDistance={2}
          maxDistance={6}
          enablePan={false}
        />
      </Suspense>
    </Canvas>
  )
}