import "./App.css";
import { useContactList } from "./hooks/data";

function App() {
  const { data: contactList, loading } = useContactList();

  return (
    <>
      <h1>My Contacts App</h1>
      {loading ? (
        <p>Loading</p>
      ) : (
        <ul>
          {contactList?.map((contact) => (
            <li>{contact.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
