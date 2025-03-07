import styles from './page.module.scss';
import logoImg from '../../../../resources/flower-shop/logo.png'
import whiteRosesImg from '../../../../resources/flower-shop/white-roses.jpeg'
import rosesImg from '../../../../resources/flower-shop/roses.jpg'

import Image, { StaticImageData } from 'next/image'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { FC } from 'react';

const NavBar: FC = () =>
  <div>
    <NavBtn Icon={MenuOutlinedIcon} title='Меню'/>
    <NavBtn Icon={LocalPhoneOutlinedIcon} title='Связаться с нами'/>
    <NavBtn Icon={RoomOutlinedIcon} title='Адреса магазинов'/>
  </div>
const NavBtn: FC<{Icon: FC, title?: string}> = ({Icon, title}) =>
  <div>
    <Icon/>
    {title}
  </div>

const SearchBar = () => <div>
  <NavBtn Icon={SearchOutlinedIcon}/>
  <NavBtn Icon={TuneOutlinedIcon}/>
</div>

const AddToCartBtn: FC<{disabled: boolean}> = ({disabled}) =>
  <button disabled={disabled}>
    <AddOutlinedIcon/>
    <div>В КОРЗИНУ</div>
  </button>

type Dimensions = {
  width: number,
  height: number,
}
const itemDimensions: Dimensions = {
  width: 139,
  height: 138,
}
const Item: FC<{
  image: StaticImageData,
  description: string,
  price: number,
  inCart: boolean,
}> = ({image, description, price, inCart}) => <div>
  <Image alt='product-item' height={itemDimensions.height} width={itemDimensions.width} src={image}/>
  <div>{description}</div>
  <div>{Number(price).toFixed(2).toString()} BYN</div>
  <AddToCartBtn disabled={inCart}/>
</div>

const Contents = () => <div>
  <Item
    image={whiteRosesImg}
    description={'Тюльпаны (поштучно)'}
    price={6.00}
    inCart={false}
  />
  <Item
    image={rosesImg}
    description={'Тюльпаны (поштучно)'}
    price={6.00}
    inCart={true}
  />
  <Item
    image={whiteRosesImg}
    description={'Тюльпаны (поштучно)'}
    price={6.00}
    inCart={false}
  />
  <Item
    image={whiteRosesImg}
    description={'Букет розовых пионовидных роз (5 шт) №10'}
    price={6.00}
    inCart={false}
  />
  <Item
    image={rosesImg}
    description={'Тюльпаны (поштучно)'}
    price={6.00}
    inCart={true}
  />
  <Item
    image={rosesImg}
    description={'Тюльпаны (поштучно)'}
    price={6.00}
    inCart={true}
  />
  <Item
    image={whiteRosesImg}
    description={'Букет розовых пионовидных роз (5 шт) №10'}
    price={6.00}
    inCart={false}
  />
</div>

export function FlowerShopFrontPage() {
  return (
    <div className={styles['page']}>
      <header className={styles['header']}>
        <Image width={138} height={142} alt='logo' src={logoImg}/>
        <NavBar/>
      </header>
      <main className={styles['main']}>
        <SearchBar/>
        <Contents/>
      </main>
      <footer className={styles['footer']}>
      </footer>
    </div>
  );
}
