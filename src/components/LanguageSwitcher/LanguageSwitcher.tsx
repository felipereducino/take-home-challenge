import React from 'react'
import { useTranslation } from 'react-i18next'
import usaFlag from '../../assets/usa-flag-icon.svg'
import brazilFlag from '../../assets/brazil-flag-icon.svg'

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="flex gap-2">
      <button onClick={() => changeLanguage('en')}>
        <img src={usaFlag} height={30} width={30} alt="USA Flag" />
      </button>
      <button onClick={() => changeLanguage('pt-BR')}>
        <img src={brazilFlag} height={30} width={30} alt="Brazil Flag" />
      </button>
    </div>
  )
}

export default LanguageSwitcher
