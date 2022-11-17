import { useState, useEffect } from 'react'

function App() {
  const list = [{
    id: 1,
    title: "Olá! Tenho uma vaga que bate com o seu perfil, podemos marcar uma conversa?",
    status: 0,
  },
  {
    id: 2,
    title: "Parabéns! Você avançou no processo da vaga de Dev",
    status: 0,
  },
  {
    id: 3,
    title: "RE: Entrevista marcada",
    status: 0,
  },
]
  const [emails, setEmails] = useState(list);
  // const [classname, setClassname] = useState('');
  useEffect(() =>{
    const read = emails.every((email) => email.status === 1);
    if (read) alert('Parabéns! Você leu todas suas mensagens!')
  }, [emails]);

  const handleRead = (id) => {
    const newList = emails.map((email) => {
      if (email.id === id) {
        return {...email, status: 1};
      }
      return email;
    });
    setEmails(newList);
  }

  const handleUnread = (id) => {
    const newList = emails.map((email) => {
      if (email.id === id) {
        return {...email, status: 0};
      }
      return email;
    });
    setEmails(newList);
  }

  const readAll = () => {
    const read = emails.map((email) => ({...email, status: 1}));
    setEmails(read);
  }

  const unreadAll = () => {
    const unread = emails.map((email) => ({...email, status: 0}));
    setEmails(unread);
  };

  // const handleClass = (status) => {
  //   if (status === 0) {
  //     return 'unread';
  //   } else {
  //     return 'read';
  //   }
  // }
  return (
    <>
    <button onClick={() => readAll()}>Read'em All</button>
    <button onClick={() => unreadAll()}>Unread'em All</button>
    <div>
      {emails.map((email) => {
        const emailClass = email.status === 1
          ? 'read'
          : 'unread';

        return (
          <div key={ email.id }>
            <h3
              className={ `${emailClass}` }
            >
              {email.title}
            </h3>
            <div>
              <button
                type="button"
                onClick={ () => handleRead(email.id) }
              >
                Read
              </button>
              <button
                type="button"
                onClick={ () => handleUnread(email.id) }
              >
                Unread
              </button>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );  
}

export default App;
