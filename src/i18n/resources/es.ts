import type { AppTranslations } from '../types'

const es: AppTranslations = {
  header: {
    badge: 'Gratis y sin registro',
    title: 'HTML Email Signature Generator',
    subtitle:
      'Crea firmas de correo electrónico profesionales, 100% compatibles con Gmail, Outlook, Apple Mail y Thunderbird. Completa el formulario, mira el resultado en tiempo real y cópialo directamente en tu cliente de correo.',
  },
  languageSwitcher: {
    label: 'Idioma',
  },
  form: {
    ariaLabel: 'Formulario de datos de la firma',
    sections: {
      general: { title: '1. Información general', description: 'Nombre, cargo y empresa' },
      contact: { title: '2. Contacto', description: 'Correo, teléfono, sitio web y dirección' },
      media: { title: '3. Medios y redes sociales', description: 'Foto, logo y perfiles sociales' },
      design: { title: '4. Diseño y personalización', description: 'Colores, fuente y plantilla de diseño' },
    },
    fields: {
      fullName: { label: 'Nombre completo', placeholder: 'Alexandre Silva' },
      jobTitle: { label: 'Cargo / Título', placeholder: 'Senior Software Engineer' },
      company: { label: 'Empresa / Organización', placeholder: 'Acme Corp' },
      department: { label: 'Departamento (opcional)', placeholder: 'Ingeniería de Producto' },
      email: { label: 'Correo electrónico', placeholder: 'tu@empresa.com' },
      phone: { label: 'Teléfono de oficina', placeholder: '+34 912 345 678' },
      mobile: { label: 'Móvil', placeholder: '+34 612 345 678' },
      website: {
        label: 'Sitio web',
        placeholder: 'https://www.empresa.com',
        hint: 'El prefijo https:// se añade automáticamente.',
      },
      address: { label: 'Dirección', placeholder: 'Calle Mayor, 1' },
      city: { label: 'Ciudad', placeholder: 'Madrid' },
      state: { label: 'Provincia', placeholder: 'MD' },
      photoUrl: {
        label: 'URL de la foto de perfil o logo',
        placeholder: 'https://...',
        hint: 'Usa una URL absoluta (https://). Base64 y rutas relativas no funcionan en correos.',
      },
      linkedin: { label: 'LinkedIn', placeholder: 'https://linkedin.com/in/...' },
      github: { label: 'GitHub', placeholder: 'https://github.com/...' },
      twitter: { label: 'X (Twitter)', placeholder: 'https://x.com/...' },
      instagram: { label: 'Instagram', placeholder: 'https://instagram.com/...' },
      primaryColor: { label: 'Color primario (nombre y divisores)' },
      secondaryColor: { label: 'Color secundario (enlaces e iconos)' },
      fontFamily: { label: 'Familia tipográfica' },
    },
    templateLabel: 'Plantilla de diseño',
    colorField: {
      pickerAriaLabel: '{{label}} (selector visual)',
      hexAriaLabel: '{{label}} (valor hexadecimal)',
    },
  },
  templates: {
    classic: {
      label: 'Clásico Horizontal',
      description: 'Foto a la izquierda con un divisor vertical y datos a la derecha.',
    },
    minimal: {
      label: 'Minimalista Vertical',
      description: 'Sin foto, datos en una sola línea compacta con separadores.',
    },
    corporate: {
      label: 'Corporativo Elegante',
      description: 'Logo arriba, nombre destacado e insignias de redes sociales.',
    },
  },
  preview: {
    newMessage: 'Nuevo mensaje',
    to: 'Para:',
    toPlaceholder: 'destinatario@email.com',
    subject: 'Asunto:',
    subjectValue: '¡Hola!',
    regards: 'Saludos cordiales,',
  },
  actions: {
    copySignature: 'Copiar firma al portapapeles',
    copying: 'Copiando…',
    copyCode: 'Copiar código HTML puro',
    download: 'Descargar archivo .html',
    toastCopySignatureSuccess: '¡Firma copiada! Solo pégala (Ctrl/Cmd+V) en la configuración de tu correo.',
    toastCopySignatureError: 'No se pudo copiar automáticamente. Prueba el botón "Copiar código HTML puro".',
    toastCopyCodeSuccess: '¡Código HTML copiado al portapapeles!',
    toastCopyCodeError: 'No se pudo copiar el código. Cópialo manualmente desde el panel de abajo.',
    toastDownload: 'Descargando {{file}}…',
  },
  codeView: {
    toggle: 'Ver código HTML generado',
  },
  signatureLabels: {
    email: 'Correo',
    phone: 'Tel',
    mobile: 'Móvil',
    website: 'Web',
    address: 'Dirección',
  },
  faq: {
    heading: 'Preguntas frecuentes sobre firmas de correo en HTML',
    items: [
      {
        question: '¿La firma funciona en Gmail, Outlook, Apple Mail y Thunderbird?',
        answer:
          'Sí. El HTML generado está 100% basado en tablas con estilos en línea, sin clases CSS, bloques <style>, Flexbox ni Grid — las tecnologías que Gmail elimina y que el motor de renderizado de Outlook (Word) no admite.',
      },
      {
        question: '¿Por qué no puedo usar una foto en Base64?',
        answer:
          'Clientes como Gmail bloquean las imágenes incrustadas en Base64 por seguridad, y la mayoría de los webmails no conservan ese tipo de dato al pegar. Por eso siempre exigimos una URL absoluta (https://) para fotos y logos.',
      },
      {
        question: '¿Cómo pego la firma en mi cliente de correo?',
        answer:
          'Haz clic en "Copiar firma al portapapeles", abre la configuración de firma de tu proveedor de correo y pega con Ctrl+V (o Cmd+V en Mac). Se conservan los colores, la tabla y los enlaces.',
      },
      {
        question: '¿Puedo descargar el código para usarlo después?',
        answer:
          'Sí, usa el botón "Descargar archivo .html" para guardar una copia local, o "Copiar código HTML puro" para pegar el código fuente en cualquier editor.',
      },
    ],
  },
  footer: {
    tip: 'Consejo: pega la firma copiada directamente en el editor de firmas de Gmail, Outlook, Apple Mail o Thunderbird — los colores, la tabla y los enlaces se conservan.',
  },
}

export default es
