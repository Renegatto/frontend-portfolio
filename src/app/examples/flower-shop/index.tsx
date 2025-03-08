'use client'
import styles from './page.module.scss';
import logoImg from '../../../../resources/flower-shop/logo.png'
import whiteRosesImg from '../../../../resources/flower-shop/white-roses.jpeg'
import rosesImg from '../../../../resources/flower-shop/roses.jpg'

import Badge from '@mui/material/Badge';
import Image, { StaticImageData } from 'next/image'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { FC } from 'react';

const NavBar: FC = () =>
  <div className={styles['navbar']}>
    <NavBtn Icon={MenuOutlinedIcon} title='Меню'/>
    <NavBtn Icon={LocalPhoneOutlinedIcon} title='Связаться с нами'/>
    <NavBtn Icon={RoomOutlinedIcon} title='Адреса магазинов'/>
  </div>
const NavBtn: FC<{Icon: FC, title?: string}> = ({Icon, title}) =>
  <div className={styles['navbar__button']}>
    <div className={styles['navbar__icon']}>
      <Icon/>
    </div>
    <div className={styles['navbar__button__text']}>{title}</div>
  </div>

const SearchBar = () => <div className={styles['search-bar']}>
  <div className={styles['search-bar__search-icon-container']}>
    <SearchOutlinedIcon sx={{fontSize: 40, padding: '0px 8px 0px 8px'}}/>
  </div>
  <TuneOutlinedIcon sx={{fontSize: 56, padding: '16px' }}/>
</div>

const AddToCartBtn: FC<{disabled: boolean}> = ({disabled}) =>
  <button className={styles['add-to-cart-btn']} disabled={disabled}>
    <AddOutlinedIcon sx={{fontSize: 18}}/>
    <div className={styles['center']}>В КОРЗИНУ</div>
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
}> = ({image, description, price, inCart}) => <div className={styles['contents__item']}>
  <Image alt='product-item' height={itemDimensions.height} width={itemDimensions.width} src={image}/>
  <div className={styles['center-text']}>{description}</div>
  <div className={styles['contents__item__bottom-container']}>
    <div className={styles['center-text']}>{Number(price).toFixed(2).toString()} BYN</div>
    <AddToCartBtn disabled={inCart}/>
  </div>
</div>

const Contents = () => <div className={styles['contents']}>
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

const Logo = () => 
  <div className={styles['logo']}>
    <Image width={138} height={142} alt='logo' src={logoImg}/>
  </div>

const CartButton = () =>
  <button className={styles['cart-button']}>
    <Badge badgeContent={3} color="error">
      <ShoppingCartOutlinedIcon sx={{fontSize: 30}}/>
    </Badge>
    <div className={styles['cart-button__amount']}>
      <b>330 BYN</b>
    </div>
  </button>

export function FlowerShopFrontPage() {
  return (
    <div className={styles['page']}>
      <header className={styles['header']}>
        <Logo/>
        <NavBar/>
      </header>
      <main className={styles['main']}>
        <SearchBar/>
        <Contents/>
      </main>
      <footer className={styles['footer']}>
        <CartButton/>
      </footer>
    </div>
  );
}
