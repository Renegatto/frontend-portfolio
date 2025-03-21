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
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { FC } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, createTheme, Fab, IconButton, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#739936',
    },
    secondary: {
      main: '#AEC51E',
      contrastText: '#47008F',
    },
  },
});

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
  <Button fullWidth variant="contained" disabled={disabled}>
    <AddOutlinedIcon sx={{fontSize: 18}}/>
    <div className={styles['center']}><b>В КОРЗИНУ</b></div>
  </Button>

const ManageCartItemBtn: FC<{amount: number}> = ({amount}) =>
  <div className={styles['manage-cart-item']}>
    <IconButton>
      <AddOutlinedIcon sx={{fontSize: 24}}/>
    </IconButton>
    <div className={styles['center']}>{amount}</div>
    <IconButton>
      <RemoveOutlinedIcon sx={{fontSize: 24}}/>
    </IconButton>
  </div>

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
}> = ({image, description, price, inCart}) =>
  <Card  classes={{root: styles['contents__item']}}>
    <div>
      <CardMedia
        component="img"
        height={itemDimensions.height}
        width={itemDimensions.width}
        src={image.src}
        alt="product-item"
      />
      <CardContent>
        {description}
      </CardContent>
    </div>
    <div className={styles['contents__item__bottom-container']}>
      <CardContent sx={{width: '100%'}}>
        <b>
          {Number(price).toFixed(2).toString()} BYN
        </b>
      </CardContent>
      <CardActions sx={{width: '100%'}}>
        {inCart ? <ManageCartItemBtn amount={5}/> : <AddToCartBtn disabled={false}/>}
      </CardActions>
    </div>
  </Card>

const Contents = () => <div className={styles['contents']}>
  <Item
    image={whiteRosesImg}
    description={'Тюльпаны (поштучно) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt nulla non dui tempus fringilla. Etiam eu condimentum ex. Sed blandit suscipit nulla ac volutpat. Nulla eu commodo nibh. Nulla.'}
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
  <Fab variant="extended" color='primary'
    classes={{
      root: styles['cart-button__fab']
    }}
  >
    <Badge badgeContent={3} color="error">
      <ShoppingCartOutlinedIcon sx={{fontSize: 24}}/>
    </Badge>
    <b>330 BYN</b>
  </Fab>

export function FlowerShopFrontPage() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}
