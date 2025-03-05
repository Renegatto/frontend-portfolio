import { FC, ReactElement } from "react";
import styles from './select-many.module.scss'
import clsx from "clsx";
import Image from 'next/image'
import DropdownArrowSvg from './dropdown-arrow.svg'
import CloseIconSvg from "./close-icon.svg"
import SelectingSvg from "./selecting.svg"

export const SelectManyExample: FC = () =>
  <SelectMany
    options={[
      <SelectBar key={-1} selectedElements={[
        <Selected key={0}>{<>Item 1</>}</Selected>,
        <Selected key={1}>{<>Item 2</>}</Selected>,
      ]}/>,
      <Item key={0} selected={false}>{<>Item 3</>}</Item>,
      <Item key={1} selected={true}>{<>Item 4</>}</Item>,
      <Item key={2} selected={false}>{<>Item 5</>}</Item>,
    ]}
  />

const Selected: FC<{children: ReactElement}> = ({children}) =>
  <div className={styles['select-many__bar__selected']}
  >
    {children}
    <CloseIcon/>
  </div>

const SelectBar: FC<{selectedElements: ReactElement[]}> = ({selectedElements}) =>
  <div className={styles['select-many__bar']}>
    <div className={styles['select-many__bar__items']}>
      {selectedElements}
      <Selecting/>
    </div>
    <DropdownArrow isUp={false}/>
  </div>

const Item: FC<{children: ReactElement, selected: boolean}> = ({children,selected}) =>
  <div
    className={
      clsx(styles['select-many__item'], selected ? styles['select-many__item__selected'] : undefined)
    }
  >
    {children}
  </div>

const SelectMany: FC<{options: ReactElement[]}> = ({options}) => {
  console.log(styles)
  return <div className={styles['select-many']}>
    {options}
  </div>
}

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

const DropdownArrow: FC<{isUp: boolean}> = ({isUp}) =>
  <Image
    src={DropdownArrowSvg}
    style={{rotate: isUp ? '0deg' : '180deg'}}
    alt='dropdown arrow'
  />