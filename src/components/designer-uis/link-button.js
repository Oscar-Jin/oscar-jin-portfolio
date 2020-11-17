import { Link } from "gatsby"
import tw, { styled } from "twin.macro"

const LinkButton = styled(Link)`
  ${tw`inline-block px-10 py-4 my-2 font-bold leading-none leading-tight text-center text-gray-100 transition duration-300 rounded-full cursor-pointer bg-primary-500 focus:outline-none hover:bg-primary-900`}
`
export default LinkButton
