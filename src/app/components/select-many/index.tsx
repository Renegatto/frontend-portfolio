'use client'
import { DetailedHTMLProps, FC, HTMLAttributes, ReactElement, ReactNode, useRef, useState } from "react";
import styles from './select-many.module.scss'
import clsx from "clsx";
import Image from 'next/image'
import DropdownArrowSvg from './dropdown-arrow.svg'
import CloseIconSvg from "./close-icon.svg"
import SelectingSvg from "./selecting.svg"


export const SelectManyExample: FC = () => { 
  const SelectManyTuple = SelectMany<number,[number,ReactElement]>
  return <SelectManyTuple
    initiallyPicked={[1,2]}
    items={new Map([
      [0,[0, <>Item 0</>]],
      [1,[1, <>Item 1</>]],
      [2,[2, <>Item 2</>]],
      [3,[3, <>Item 3 scroll with Shift+Mouse wheel. Here it is.</>]],
      [4,[4, <>Item 4</>]],
    ])}
    Option={([key,content], onClick) => <Item key={key} onClick={onClick}>{content}</Item>}
    Picked={([key,content], onUnpick) => <Picked key={key} onUnpick={onUnpick}>{content}</Picked>}
  />
}


const Picked: FC<{children: ReactElement, onUnpick: () => void}> = ({onUnpick, children}) =>
  <div
    className={styles['select-many__bar__picked']}
  >
    {children}
    <div
      onClick={onUnpick}
    >
      <CloseIcon/>
    </div>
  </div>

type SelectBarProps = {
  selectedElements: ReactElement[],
  onCollapse: () => void,
  onExpand: () => void,
}

const SelectBar: FC<SelectBarProps> = ({selectedElements, onExpand, onCollapse}) =>
  <div className={styles['select-many__bar']}>
    <div
      className={styles['select-many__bar__items']}
    >
      {selectedElements}
      <Selecting/>
    </div>
    <DropdownButton onExpand={onExpand} onCollapse={onCollapse}/>
  </div>


const Item: FC<{
  children: ReactElement,
  onClick: () => void,
}> = ({children,onClick}) => {
  const [selected,setSelected] = useState(false)
  
  return <div
    className={
      clsx(styles['select-many__item'], selected ? styles['select-many__item__selected'] : undefined)
    }
    onMouseOver={() => setSelected(true)}
    onMouseLeave={() => setSelected(false)}
    onClick={() => onClick()}
  >
    {children}
  </div>
}

type SelectManyProps<K,T> = {
  initiallyPicked: K[],
  items: Map<K,T>,
  Picked: (item: T, onUnpick: () => void) => ReactElement,
  Option: (item: T, onClick: () => void) => ReactElement,
}

const SelectMany = <K,T>({initiallyPicked, items, Picked, Option}: SelectManyProps<K,T>): ReactNode => {
  const [picked, setPicked] = useState<K[]>(initiallyPicked)
  const options = [...items.entries()]
    .filter(([id]) => !picked.includes(id))
  const handlePick = (id: K) => setPicked([...picked,id])
  const handleUnpick = (id: K) => setPicked(picked.filter(k => k !== id))
  const [expandOptions,setExpandOptions] = useState(false)
  const OptionListC = OptionList<[K,T]>
  return <div className={styles['select-many']}>
    <div className={styles['select-list__background']}>
      <SelectBar
        selectedElements={
          picked.flatMap(id => {
            const item = items.get(id)
            return typeof item === 'undefined' ? [] : [Picked(item,() => handleUnpick(id))]
          }) 
        }
        onExpand={() => setExpandOptions(true)}
        onCollapse={() => setExpandOptions(false)}
      />
      <div hidden={!expandOptions}>
        <OptionListC
          onPicked={([id]) => handlePick(id)}
          options={options}
          Option={([,item],onClick) => Option(item,onClick)}
        />
      </div>
    </div>
  </div>
}

type OptionListProps<T> = {
  options: T[],
  onPicked: (picked: T) => void,
  Option: (item: T, onClick: () => void) => ReactElement,
}
const OptionList = <T,>({options, onPicked, Option}: OptionListProps<T>): ReactNode =>
  <div className={styles['select-many__option-list']}>{
    options.map(option =>
      Option(option,() => onPicked(option)))
  }
  </div>

const Selecting: FC = () =>
  <div className={styles['select-many__bar__items__selecting-item']}>
    <Image
      src={SelectingSvg}
      alt='close'
    />
  </div>

const CloseIcon: FC = () =>
  <Image
    src={CloseIconSvg}
    alt='close'
  />

const DropdownButton: FC<{
  onExpand: () => void,
  onCollapse: () => void,
}> = ({onExpand, onCollapse}) => {
  const [expanded,setExpanded] = useState(false)
  const handleClick = () => {
    setExpanded(x => !x)
    expanded ? onCollapse() : onExpand()
  }
  return <div
    onClick={handleClick}
  >
    <DropdownArrow isUp={!expanded}/>
  </div>
}

const DropdownArrow: FC<{isUp: boolean}> = ({isUp}) =>
  <Image
    src={DropdownArrowSvg}
    style={{rotate: isUp ? '0deg' : '180deg'}}
    alt='dropdown arrow'
  />

const useKeys = (): { key: number, newKey: () => void } => {
  const [key,setKey] = useState(0)
  return {
    key,
    newKey: () => setKey(k => k + 1)
  }
}