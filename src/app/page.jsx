// import Image from 'next/image'
// import styles from './page.module.scss'

export default function Home () {
  async function action (data) {
    'use server'

    console.log(data.get('title'))
  }

  return (
    <main>
      <h2>PokeNext</h2>
      <form action={action}>
        <input type="text" name="title" placeholder="Title" />
        <button type="submit">Send</button>
      </form>
    </main>
  )
}
