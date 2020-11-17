import React, { useState } from "react"
import { BiCheck } from "react-icons/bi"

const LanguageSelector = () => {
  const [locale, setLocale] = useState("en")
  const [hidden, setHidden] = useState(true)

  const languages = {
    en: "🇬🇧 English",
    ja: "🇯🇵 日本語",
    zh: "🇨🇳 中文",
  }

  const toggleOptions = () => {
    setHidden(!hidden)
  }

  return (
    <div className="relative">
      <span className="inline-block w-full rounded-md opacity ">
        <button
          type="button"
          // className="relative w-full py-2 pl-5 pr-10 text-left transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md cursor-default focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5 hover:bg-gray-100"
          className="p-1 px-2 mx-4 my-2 text-sm font-semibold tracking-wide transition duration-300 border border-gray-200 rounded-md sm:text-base hover:bg-gray-100 focus:bg-gray-100 sm:mx-6"
          onClick={toggleOptions}
        >
          <div className="flex items-center space-x-3">
            <span className="block truncate">{languages[locale]}</span>
          </div>
        </button>
      </span>

      <div
        className={
          hidden
            ? "hidden "
            : "block " +
              "absolute w-auto mt-1 right-0  bg-white rounded-md shadow-lg z-10 "
        }
      >
        <ul
          tabIndex="-1"
          className="px-3 py-2 overflow-auto text-base leading-6 rounded-md shadow-xs max-h-56 focus:outline-none sm:text-sm sm:leading-5"
        >
          {Object.keys(languages).map(key => (
            <li
              key={key}
              data-locale={key}
              role="option"
              className="relative p-2 text-gray-900 rounded-md cursor-pointer select-none pr-9 hover:bg-gray-100"
              onClick={() => {
                setLocale(key)
                setHidden(true)
              }}
            >
              <div className="font-normal truncate">
                {languages[key]}
                {key === locale && (
                  <BiCheck className="relative inline-block w-4 h-4 ml-2 " />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LanguageSelector
