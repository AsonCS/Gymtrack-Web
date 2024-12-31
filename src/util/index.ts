export function checkEnvironment() {
    if (typeof window !== 'undefined') {
        throw new Error('Firestore must be used in a Node.js environment')
    }
}
