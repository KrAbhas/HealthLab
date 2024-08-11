import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
  };

  return (
    <div className="language-selector">
      <button 
        className={`btn ${selectedLanguage === 'en' ? 'btn-primary' : 'btn-secondary'}`} 
        onClick={() => handleLanguageChange('en')}
      >
        English
      </button>
      <button 
        className={`btn ${selectedLanguage === 'bn' ? 'btn-primary' : 'btn-secondary'}`} 
        onClick={() => handleLanguageChange('bn')}
      >
        বাংলা
      </button>
    </div>
  );
};

export default LanguageSelector;
