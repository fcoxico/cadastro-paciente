import React from 'react'

export default function showpatientinfo({nome, email, cpf, idade, numero_contato}) {
    
  return (
    <div>
        <strong>{nome}</strong>
        <h3>{email}</h3>
        <h3>{cpf}</h3>
        <h3>{idade}</h3>
        <h3>{numero_contato}</h3>
    </div>
  )
}
