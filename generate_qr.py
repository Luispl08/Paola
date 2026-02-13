import qrcode
from PIL import Image, ImageDraw

# URL del sitio web corregida
url = "https://paola-one.vercel.app/"

# Crear el código QR con alta corrección de errores
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=20,
    border=4,
)

qr.add_data(url)
qr.make(fit=True)

# Crear la imagen del QR
qr_img = qr.make_image(fill_color="black", back_color="white").convert('RGB')
qr_width, qr_height = qr_img.size

# Logo personalizado: corazon.jpg
try:
    logo = Image.open("corazon.jpg")
    
    # Definir tamaño del logo (Aumentado al 35% del QR para que sea más visible)
    logo_size = int(qr_width * 0.35)
    logo.thumbnail((logo_size, logo_size), Image.Resampling.LANCZOS)
    
    # Dibujar un recuadro blanco de fondo para el logo
    draw = ImageDraw.Draw(qr_img)
    offset = 6 # Un poco más de margen para el corazón grande
    box_pos = [
        (qr_width - logo.width) // 2 - offset,
        (qr_height - logo.height) // 2 - offset,
        (qr_width + logo.width) // 2 + offset,
        (qr_height + logo.height) // 2 + offset
    ]
    draw.rectangle(box_pos, fill="white")
    
    # Pegar el logo en el centro
    pos = ((qr_width - logo.width) // 2, (qr_height - logo.height) // 2)
    qr_img.paste(logo, pos)
    
    print(f"[OK] Logo corazon.jpg agregado al QR")
except Exception as e:
    print(f"[ERROR] No se pudo procesar corazon.jpg: {e}")

# Guardar
qr_img.save("qr.png")

print(f"[OK] QR generado para: {url}")
print(f"[OK] Archivo guardado como: qr.png")
