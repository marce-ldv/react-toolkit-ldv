import {
  useState,
  FC,
  SetStateAction,
  useRef,
  Dispatch,
  ChangeEvent,
  SyntheticEvent,
} from 'react'

import { TextField } from '@mui/material'

import {
  StyledDropdownChecks,
  StyledOption,
  StyledSearch,
  StyledOptionsContainer,
  ButtonsContainer,
  StyledSearchForm,
  HiddenInputStyles,
} from './styled'
import AddIcon from '@/public/assets/icons/addIcon.svg'
import CancelIcon from '@/public/assets/icons/cancelIcon.svg'
import CheckIcon from '@/public/assets/icons/checkIcon.svg'
import PlusIcon from '@/public/assets/icons/plusIcon.svg'
import SearchIcon from '@/public/assets/icons/searchIcon.svg'

export interface SelectRoundProps {
  optionsList: string[]
  onSubmit: (data: object) => typeof data | void
  onChange?: (data: ChangeEvent<HTMLSelectElement>) => typeof data | void
  name: string
  modules?: string[]
  setOpen?: Dispatch<SetStateAction<boolean>>
}

const SelectRound: FC<SelectRoundProps> = ({
  optionsList,
  onChange,
  name,
  modules = ['option'],
  setOpen,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<Array<string>>([])
  const [search, setSearch] = useState<string>('')
  const textRef = useRef<null | HTMLElement>(null)
  const isAllOptionsSelected = Boolean(
    Number(selectedOptions.length) === Number(optionsList.length),
  )

  const handleAddSelectedOption = (option: string) => {
    const loweredOption = option.toLowerCase()
    if (selectedOptions.includes(option)) {
      const filteredList = selectedOptions.filter(
        filteredOp => filteredOp.toLowerCase() !== loweredOption,
      )
      setSelectedOptions(filteredList)
      return textRef.current?.focus()
    }
    setSelectedOptions(prevState => [...prevState, option])
  }

  const handleToggleAllOptions = () => {
    isAllOptionsSelected
      ? setSelectedOptions([])
      : setSelectedOptions(optionsList)
  }

  const handleClearSelectedOptions = (event: SyntheticEvent) => {
    event.preventDefault()
    event.stopPropagation()
    setSelectedOptions([])
    setSearch('')
    setOpen && setOpen(false)
  }
  const handleSearch = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setSearch(event.target.value)
  }

  const filteredOptions = optionsList.filter(option =>
    option.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <StyledDropdownChecks id='selectchecks-dropDown'>
      <TextField
        name={name}
        onBlur={onChange}
        value={selectedOptions}
        inputRef={textRef}
        sx={HiddenInputStyles}
        id='selectchecks-textfield'
      />
      <StyledSearch id='selectchecks-searchContainer'>
        <SearchIcon id='selectchecks-searchIcon' />{' '}
        <StyledSearchForm
          value={search}
          onChange={handleSearch}
          placeholder='Buscar'
          id='selectchecks-searchForm'
        />
      </StyledSearch>
      <StyledOptionsContainer id='selectchecks-container'>
        {search.length < 1 && (
          <StyledOption
            selected={isAllOptionsSelected}
            onClick={handleToggleAllOptions}
            id='selectchecks-option'
          >
            {isAllOptionsSelected ? (
              <CheckIcon id='selectchecks-checkIcon' />
            ) : (
              <PlusIcon id='selectchecks-plusIcon' />
            )}
            {'Seleccionar todos'}
          </StyledOption>
        )}
        {filteredOptions.map(option => {
          const selected = selectedOptions.includes(option)
          const compareSelect = modules?.some(
            (module: string) => module === option,
          )
          return (
            <StyledOption
              key={option}
              selected={selected}
              id={`selectchecks-${option}`}
              onClick={() => handleAddSelectedOption(option)}
            >
              {selected || compareSelect ? (
                <CheckIcon id='selectchecks-checkIconmap' />
              ) : (
                <PlusIcon id='selectchecks-plusIconmap' />
              )}
              {option}
            </StyledOption>
          )
        })}
      </StyledOptionsContainer>
      <ButtonsContainer id='selectchecks-buttonsContainer'>
        <CancelIcon onClick={handleClearSelectedOptions} />
        <AddIcon onClick={() => textRef.current?.focus()} />
      </ButtonsContainer>
    </StyledDropdownChecks>
  )
}

export default SelectRound
