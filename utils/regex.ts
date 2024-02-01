export function emailRegex(): RegExp {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
}

export function phoneRegex(): RegExp {
  return /^\d+$/;
}