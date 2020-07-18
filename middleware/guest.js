export default function ({store, redirect}) {
if (store.getters['authentication/auth/authenticated']) {
  return redirect('/')
}
}
