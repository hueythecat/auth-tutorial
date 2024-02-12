import { auth, signOut } from "@/auth";


async function signout() {
  "use server"
  await signOut();
}

const SettingsPage = async () => {
  const session = await auth();
  return (
    <div>
      <h1>Settings Page</h1>
      <p>{JSON.stringify(session)}</p>
      <form action={signout}>
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
}

export default SettingsPage;