//  ──────────────────────────────────────────────────────────── import ───┐
import Slider from "react-slick"
import React, { useState } from "react"
import tw, { styled } from "twin.macro"
import { AiFillStar } from "react-icons/ai"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import { SectionHeading, SectionSubheading } from "../designer-uis/heading.js"
import teaching from "../../images/teaching.svg"
import woman from "../../images/woman.svg"
import womanLonghair from "../../images/woman-longhair.svg"
import "slick-carousel/slick/slick.css"

// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────── tailwind ───┐
const Container = styled.div`
  ${tw`relative`}
`
const ContentWithPaddingXl = styled.div`
  ${tw`max-w-screen-xl py-20 mx-auto lg:py-24`}
`
const Row = styled.div`
  ${tw`md:items-center md:flex md:justify-between`}
`
const Column = styled.div`
  ${tw`max-w-xs mx-auto sm:max-w-md md:max-w-none md:mx-0`}
`
const ImageColumn = styled(Column)`
  ${tw`relative flex-shrink-0 p-2 md:w-5/12 lg:w-6/12`}
`
const TextColumn = styled(Column)`
  ${tw`mt-16 md:w-7/12 lg:w-6/12 md:mt-0 md:pl-12 lg:pl-16 md:order-last`}
`
const Image = styled.img`
  ${tw`p-2`}
`
const Subheading = styled(SectionSubheading)`
  ${tw`text-center md:text-left`}
`
const Heading = styled(SectionHeading)`
  ${tw`mt-4 text-3xl font-black leading-tight text-left text-center sm:text-4xl lg:text-5xl md:text-left`}
`
const Highlight = styled.span`
  ${tw`text-primary-500 `}
`
const Description = styled.p`
  ${tw`mt-6 text-sm font-medium leading-relaxed text-center md:text-left md:text-base lg:text-lg text-secondary-100`}
`
const TestimonialSlider = styled(Slider)`
  ${tw`mt-10 text-center md:text-left`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`flex justify-center h-auto mb-1`}
  }
`
const Testimonial = styled.div`
  ${tw`outline-none h-full flex! flex-col p-4 bg-gray-100 shadow-sm rounded-lg`}
`
const StarsContainer = styled.div`
  ${tw`mt-2`}
`
const TestimonialHeading = styled.div`
  ${tw`mt-4 text-xl font-bold`}
`
const Quote = styled.blockquote`
  ${tw`mt-4 mb-8 font-medium leading-relaxed text-gray-700 sm:mb-10`}
`
const StudentInfoAndControlsContainer = styled.div`
  ${tw`flex flex-col items-center justify-between mt-auto sm:flex-row`}
`
const StudentInfo = styled.div`
  ${tw`flex flex-col items-center justify-center sm:flex-row lg:justify-start`}
`
const StudentProfilePicture = styled.img`
  ${tw`w-16 h-16 rounded-full sm:w-20 sm:h-20`}
`
const StudentTextInfo = styled.div`
  ${tw`mt-2 text-center md:text-left sm:ml-6 sm:mt-0`}
`
const StudentName = styled.h5`
  ${tw`text-xl font-bold`}
`
const StudentTitle = styled.p`
  ${tw`font-medium text-secondary-100`}
`
const Controls = styled.div`
  ${tw`flex mt-8 sm:mt-0`}
`
const ControlButton = styled.button`
  ${tw`p-3 mx-3 transition duration-300 bg-gray-200 rounded-full hover:bg-gray-300 text-primary-500 hover:text-primary-700 focus:outline-none focus:shadow-outline`}
`
const StarIcon = styled(AiFillStar)`
  ${tw`inline-block w-5 h-5 mr-1 text-orange-400 fill-current last:mr-0`}
`
const LeftArrow = styled(BiLeftArrowAlt)`
  ${tw`w-6 h-6`}
`
const RightArrow = styled(BiRightArrowAlt)`
  ${tw`w-6 h-6`}
`
// <───────────────────────────────────────────────────────────────────────┘

//  ───────────────────────────────────────────────────────── component ───┐
export default function Teaching() {
  const [sliderRef, setSliderRef] = useState(null)
  const testimonials = [
    {
      stars: 5,
      profileImageSrc: womanLonghair,
      heading: "Attention to detail",
      quote:
        "Oscar is great at teaching. I have acquired so much more knowledge than just learning all by myself. He has a profound knowledge of JavaScript. I would definitely recommend him to others!",
      customerName: "あやぱん",
      customerTitle: "デザイナー、企画",
    },
    {
      stars: 5,
      profileImageSrc: woman,
      heading: "金ちゃん先生物知りで面白い!",
      quote:
        "金ちゃん先生教えるの上手！色んなこと知ってるから話すの楽しい！今まで知らなかったことも分かるようになって、自分で成長を感じた。いつもありがとう！",
      customerName: "わか",
      customerTitle: "学生、クリエイター",
    },
  ]

  return (
    <Container>
      <ContentWithPaddingXl>
        <Row>
          <ImageColumn>
            <Image src={teaching} />
          </ImageColumn>
          <TextColumn>
            <Subheading>Teaching</Subheading>
            <Heading>
              The best <Highlight>form</Highlight> of learning.
            </Heading>
            <Description>
              Regardless of what I do, I try to always improve. That is why
              teaching is my second passion. They are not limited to my
              occupation, but also the language I speak, the books I read,
              tutorials I watch; all sort of materials I came across.
            </Description>
            <TestimonialSlider arrows={false} ref={setSliderRef}>
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index}>
                  <StarsContainer>
                    {Array.from(Array(testimonial.stars).keys()).map(number => (
                      <StarIcon key={number} />
                    ))}
                  </StarsContainer>
                  <TestimonialHeading>{testimonial.heading}</TestimonialHeading>
                  <Quote>{testimonial.quote}</Quote>
                  <StudentInfoAndControlsContainer>
                    <StudentInfo>
                      <StudentProfilePicture
                        src={testimonial.profileImageSrc}
                        alt={testimonial.customerName}
                      />
                      <StudentTextInfo>
                        <StudentName>{testimonial.customerName}</StudentName>
                        <StudentTitle>{testimonial.customerTitle}</StudentTitle>
                      </StudentTextInfo>
                    </StudentInfo>
                    <Controls>
                      <ControlButton onClick={sliderRef?.slickPrev}>
                        <LeftArrow />
                      </ControlButton>
                      <ControlButton onClick={sliderRef?.slickNext}>
                        <RightArrow />
                      </ControlButton>
                    </Controls>
                  </StudentInfoAndControlsContainer>
                </Testimonial>
              ))}
            </TestimonialSlider>
          </TextColumn>
        </Row>
      </ContentWithPaddingXl>
    </Container>
  )
}
// <───────────────────────────────────────────────────────────────────────┘
