import { ContactInfo } from '../types/portfolio';

export function getWhatsAppUrl(whatsapp: string, defaultMessage?: string): string {
  if (!whatsapp || whatsapp === 'YOUR WHATSAPP') {
    return 'https://wa.me/?text=' + encodeURIComponent(defaultMessage || 'Hello! I am interested in discussing a project with you.');
  }
  // Strip out spaces, pluses, dashes
  const cleanNumber = whatsapp.replace(/[^0-9]/g, '');
  const text = defaultMessage ? `?text=${encodeURIComponent(defaultMessage)}` : '';
  return `https://wa.me/${cleanNumber}${text}`;
}

export function getPhoneUrl(phone: string): string {
  if (!phone || phone === 'YOUR PHONE') {
    return 'tel:+';
  }
  const cleanNumber = phone.replace(/[^0-9+]/g, '');
  return `tel:${cleanNumber}`;
}

export function getEmailUrl(email: string, subject?: string, body?: string): string {
  if (!email || email === 'YOUR EMAIL') {
    return 'mailto:contact@example.com';
  }
  const params: string[] = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  const query = params.length ? `?${params.join('&')}` : '';
  return `mailto:${email}${query}`;
}

export function getSocialUrl(platform: string, handleOrUrl: string): string {
  if (!handleOrUrl || handleOrUrl.startsWith('YOUR ')) {
    return '#';
  }
  if (handleOrUrl.startsWith('http://') || handleOrUrl.startsWith('https://')) {
    return handleOrUrl;
  }
  switch (platform.toLowerCase()) {
    case 'linkedin':
      return `https://linkedin.com/in/${handleOrUrl.replace(/^@/, '')}`;
    case 'github':
      return `https://github.com/${handleOrUrl.replace(/^@/, '')}`;
    case 'instagram':
      return `https://instagram.com/${handleOrUrl.replace(/^@/, '')}`;
    case 'facebook':
      return `https://facebook.com/${handleOrUrl.replace(/^@/, '')}`;
    case 'tiktok':
      return `https://tiktok.com/@${handleOrUrl.replace(/^@/, '')}`;
    default:
      return handleOrUrl;
  }
}
