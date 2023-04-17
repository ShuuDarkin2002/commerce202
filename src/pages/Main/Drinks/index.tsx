
import { SnackTitle } from '../../../components/SnackTitle'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { useSnack } from '../../../hooks/useSnack'


export default function Drinks() {
  const {drinks} = useSnack()


  return (
    <>
      <Head title='Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </>
  )
}