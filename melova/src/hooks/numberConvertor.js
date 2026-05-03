export const toLocaleDigits = (val) => {
    if (!val && val !== 0) return '';
    const str = val.toString();
    const lang = localStorage.getItem("lang")

    if (lang === 'en') return str;

    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return str.replace(/[0-9]/g, (w) => persianDigits[+w]);
};