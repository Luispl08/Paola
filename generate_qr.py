import qrcode
from PIL import Image, ImageDraw

# URL del sitio web
url = "https://menubqto.github.io/CASA-LA-MARTINA/"

# Crear el código QR con alta corrección de errores (necesario para que funcione con logo)
qr = qrcode.QRCode(
    version=1,  # Tamaño del QR (1 es el más pequeño)
    error_correction=qrcode.constants.ERROR_CORRECT_H,  # Alta corrección de errores (30%)
    box_size=20,  # Tamaño de cada caja en píxeles (aumentado para mayor calidad)
    border=4,  # Tamaño del borde (mínimo es 4)
)

# Agregar los datos (URL)
qr.add_data(url)
qr.make(fit=True)

# Crear la imagen del QR
qr_img = qr.make_image(fill_color="black", back_color="white").convert('RGB')

# Abrir el logo del restaurante
try:
    logo = Image.open("logo.png")
    
    # Calcular el tamaño del logo (37.5% del QR - 50% más grande que antes)
    qr_width, qr_height = qr_img.size
    logo_size = int(qr_width * 0.375)  # Aumentado de 0.25 a 0.375 (50% más grande)
    
    # Redimensionar el logo manteniendo la proporción
    logo.thumbnail((logo_size, logo_size), Image.Resampling.LANCZOS)
    
    # Crear un recuadro negro de tamaño fijo (basado en el tamaño original del logo al 25%)
    original_logo_size = int(qr_width * 0.25)
    box_size = int(original_logo_size * 1.3)  # Tamaño fijo basado en el logo original
    
    # Calcular la posición central para el recuadro
    box_pos = (
        (qr_width - box_size) // 2,
        (qr_height - box_size) // 2
    )
    
    # Dibujar el recuadro negro en el centro del QR
    draw = ImageDraw.Draw(qr_img)
    draw.rectangle(
        [box_pos[0], box_pos[1], box_pos[0] + box_size, box_pos[1] + box_size],
        fill="white",
        outline="white",
        width=2
    )
    
    # Calcular la posición central para el logo
    logo_pos = (
        (qr_width - logo.width) // 2,
        (qr_height - logo.height) // 2
    )
    
    # Pegar el logo en el centro del QR (sobre el recuadro blanco)
    qr_img.paste(logo, logo_pos, logo if logo.mode == 'RGBA' else None)
    
    print(f"[OK] Logo agregado al QR con recuadro negro")
except FileNotFoundError:
    print(f"[ADVERTENCIA] No se encontro logo.png, generando QR sin logo")
except Exception as e:
    print(f"[ADVERTENCIA] Error al agregar logo: {e}")

# Guardar la imagen final
qr_img.save("qr.png")

print(f"[OK] Codigo QR generado exitosamente: qr.png")
print(f"URL codificada: {url}")
