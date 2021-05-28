import { useRef, useState } from 'react'

import styles from './styles.module.css'

export default function Search (props) {
  const [ perPage, setPerPage ] = useState(props.per_page || 10)
  const [ search, setSearch ] = useState(props.search || '')

  const refForm = useRef(null)

  function updatePerPage (e) {
    setPerPage(e.target.value)
  }
  function handleSearchInput (e) {
    setSearch(e.target.value)
  }
  function handleSubmit (e) {
    e.preventDefault()
    refForm.current.submit()
  }

  return <>
    <form className={ styles.searchForm } ref={ refForm } onSubmit={ handleSubmit }>

      <label
        className={ styles.searchLabel }
        id="search"
        htmlFor="search"
      >Search for images</label>

      <input
        className={ styles.searchLabel }
        className={ styles.searchInput__text }
        onChange={ handleSearchInput }
        name="search"
        type="text"
        value={ search }
        autofocus
      />

      <div className={ styles.perPageContainer }>
        <label className={ styles.searchLabel }>Images per page</label>
        <input
          className={ styles.searchInput__number }
          onChange={ updatePerPage }
          name="per_page"
          type="number"
          min="10"
          max="50"
          value={ perPage }
        />

      </div>


      <input className={ styles.searchSubmit } type="submit" value="go" />
    </form>
  </>
}
