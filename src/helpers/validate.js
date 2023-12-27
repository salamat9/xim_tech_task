export function validatePhone(value) {
    const phoneRegex = /^(\+\d+)$/;
    if (!phoneRegex.test(value)) return false;
    return true;
};

export function validateEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return false;
    return true;
};
