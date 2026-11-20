
export function poateConfirma(status, expiresAt, now) {
return status === 'HELD' && now < expiresAt;
}
