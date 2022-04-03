import React from 'react'

interface IProps {
  address: string
}
const AddressCompressor: React.FC<IProps> = ({ address }) => {
  const splitAddress = address?.substr(0, 6) + `....` + address?.substr(address.length - 5, address.length - 1)
  return <div>{splitAddress}</div>
}

export default AddressCompressor
