import { FC, ReactElement } from "react";
import styles from './select-many.module.scss'
import clsx from "clsx";

export const SelectManyExample: FC = () =>
  <SelectMany
    options={[
      <SelectBar key={-1} selectedElements={[
        <Selected key={0}>{<>Crazyyyyy</>}</Selected>,
        <Selected key={1}>{<>Frog</>}</Selected>,
      ]}/>,
      <Item key={0} selected={false}>{<>Option 1</>}</Item>,
      <Item key={1} selected={true}>{<>Option 2</>}</Item>,
      <Item key={2} selected={false}>{<>Option 3</>}</Item>,
    ]}
  />

const Selected: FC<{children: ReactElement}> = ({children}) =>
  <div className={styles['select-many__bar__selected']}>{children}</div>

const SelectBar: FC<{selectedElements: ReactElement[]}> = ({selectedElements}) =>
  <div className={styles['select-many__bar']}>
    {selectedElements}
  </div>

const Item: FC<{children: ReactElement, selected: boolean}> = ({children,selected}) =>
  <div className={
    clsx(styles['select-many__item'], selected ? styles['select-many__item__selected'] : undefined)
  }>{children}
  </div>

const SelectMany: FC<{options: ReactElement[]}> = ({options}) => {
  console.log(styles)
  return <div className={styles['select-many']}>
    {options}
  </div>
}