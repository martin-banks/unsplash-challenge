import styles from './styles.module.css'

export default function UpdateBanner () {

  return <>
    <a className={ styles.banner } href="https://unsplash-challenge-update.martinbanks.com.au">
      <p>This is the original challenge version. Click here for an updated version.</p>
    </a>
  </>
}
