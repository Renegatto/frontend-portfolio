import { FC, ReactElement } from "react";
import styles from './select-many.module.scss'
import clsx from "clsx";

export const SelectManyExample: FC = () =>
  <SelectMany
    options={[
      <Item key={0} selected={false}>{<>Option 1</>}</Item>,
      <Item key={1} selected={true}>{<>Option 2</>}</Item>,
      <Item key={2} selected={false}>{<>Option 3</>}</Item>,
    ]}
  />
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