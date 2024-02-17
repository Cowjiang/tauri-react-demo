import { SVGProps } from 'react'

type Props = SVGProps<any>

const IconWrapper = (props: Props) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      role="icon"
      {...props}
    >
      {props.children}
    </svg>
  )
}

export const DarkThemeIcon = (props: Props) => {
  return (
    <svg width="128" height="96" viewBox="0 0 64 48" fill="none" {...props}>
      <rect width="64" height="48" rx="4" fill="#2D2D2D"></rect>
      <path d="M0 4C0 1.79086 1.79086 0 4 0H23V48H4C1.79086 48 0 46.2091 0 44V4Z" fill="#333333"></path>
      <path d="M0 4C0 1.79086 1.79086 0 4 0H5V48H4C1.79086 48 0 46.2091 0 44V4Z" fill="#383838"></path>
      <rect x="30" y="6" width="26" height="6" rx="0.1" fill="#3B3B3B"></rect>
      <rect x="30" y="16" width="16" height="6" rx="0.1" fill="#3B3B3B"></rect>
      <rect x="30" y="26" width="22" height="6" rx="0.1" fill="#3B3B3B"></rect>
      <rect x="8" y="6" width="13" height="1" rx="0.1" fill="#424242"></rect>
      <rect x="8" y="11" width="6" height="1" rx="0.1" fill="#424242"></rect>
      <rect x="8" y="16" width="10" height="1" rx="0.1" fill="#424242"></rect>
    </svg>
  )
}

export const LightThemeIcon = (props: Props) => {
  return (
    <svg width="128" height="96" viewBox="0 0 64 48" fill="none" {...props}>
      <rect width="64" height="48" rx="4" fill="white"></rect>
      <path d="M0 4C0 1.79086 1.79086 0 4 0H23V48H4C1.79086 48 0 46.2091 0 44V4Z" fill="#D6D6D8"></path>
      <path d="M0 4C0 1.79086 1.79086 0 4 0H5V48H4C1.79086 48 0 46.2091 0 44V4Z" fill="#919294"></path>
      <rect x="30" y="6" width="26" height="6" rx="0.1" fill="#E6E7E9"></rect>
      <rect x="30" y="16" width="16" height="6" rx="0.1" fill="#E6E7E9"></rect>
      <rect x="30" y="26" width="22" height="6" rx="0.1" fill="#E6E7E9"></rect>
      <rect x="8" y="6" width="13" height="1" rx="0.1" fill="#919294"></rect>
      <rect x="8" y="11" width="6" height="1" rx="0.1" fill="#919294"></rect>
      <rect x="8" y="16" width="10" height="1" rx="0.1" fill="#919294"></rect>
    </svg>
  )
}

export const HistoryIcon = (props: Props) => {
  return (
    <IconWrapper {...props}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(2.000000, 2.000100)" fill="currentColor" fillRule="nonzero">
          <path d="M10,0 C15.53,0 20,4.48 20,10 C20,15.53 15.53,20 10,20 C4.48,20 0,15.53 0,10 C0,4.48 4.48,0 10,0 Z M9.65,4.93 C9.24,4.93 8.9,5.26 8.9,5.68 L8.9,5.68 L8.9,10.73 C8.9,10.99 9.04,11.23 9.27,11.37 L9.27,11.37 L13.19,13.71 C13.31,13.78 13.44,13.82 13.58,13.82 C13.83,13.82 14.08,13.69 14.22,13.45 C14.43,13.1 14.32,12.64 13.96,12.42 L13.96,12.42 L10.4,10.3 L10.4,5.68 C10.4,5.26 10.06,4.93 9.65,4.93 Z" />
        </g>
      </g>
    </IconWrapper>
  )
}

export const CloseIcon = (props: Props) => {
  return (
    <IconWrapper {...props}>
      <path
        fill="currentColor"
        d="M13.4,12l6.3-6.3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l6.3,6.3l-6.3,6.3C4.1,18.5,4,18.7,4,19c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.4,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L13.4,12z"
      />
    </IconWrapper>
  )
}

export const PaintIcon = (props: Props) => {
  return (
    <IconWrapper {...props}>
      <path
        fill="currentColor"
        d="M20.057,16.8l.1.1a1.912,1.912,0,0,0,1.769.521,1.888,1.888,0,0,0,1.377-1.177A11.924,11.924,0,0,0,24.08,11.7,12.155,12.155,0,0,0,12.5.007,12,12,0,0,0,.083,12a12.014,12.014,0,0,0,12,12c.338,0,.67-.022,1-.05a1,1,0,0,0,.916-1l-.032-3.588A3.567,3.567,0,0,1,20.057,16.8ZM17.115,8.05A1.5,1.5,0,1,1,16.05,9.885,1.5,1.5,0,0,1,17.115,8.05Zm-9.23,8.9A1.5,1.5,0,1,1,8.95,15.115,1.5,1.5,0,0,1,7.885,16.95Zm0-6A1.5,1.5,0,1,1,8.95,9.115,1.5,1.5,0,0,1,7.885,10.95Zm5-3A1.5,1.5,0,1,1,13.95,6.115,1.5,1.5,0,0,1,12.885,7.95Z"
      />
    </IconWrapper>
  )
}

export const CommandIcon = (props: Props) => {
  return (
    <IconWrapper {...props}>
      <path
        fill="currentColor"
        d="m19,14h-2v-4h2c2.757,0,5-2.243,5-5S21.757,0,19,0s-5,2.243-5,5v2h-4v-2C10,2.243,7.757,0,5,0S0,2.243,0,5s2.243,5,5,5h2v4h-2c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5v-2h4v2c0,2.757,2.243,5,5,5s5-2.243,5-5-2.243-5-5-5Zm-2-9c0-1.103.897-2,2-2s2,.897,2,2-.897,2-2,2h-2v-2Zm-12,2c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2v2h-2Zm2,12c0,1.103-.897,2-2,2s-2-.897-2-2,.897-2,2-2h2v2Zm3-5v-4h4v4h-4Zm9,7c-1.103,0-2-.897-2-2v-2h2c1.103,0,2,.897,2,2s-.897,2-2,2Z"
      />
    </IconWrapper>
  )
}

export const TerminalIcon = (props: Props) => {
  return (
    <IconWrapper {...props}>
      <path
        fill="currentColor"
        d="M9.97,14.47l-7.44,7.11c-.29,.28-.66,.42-1.04,.42-.4,0-.79-.16-1.08-.46-.57-.6-.55-1.55,.05-2.12l7.41-7.09c.17-.17,.17-.49-.02-.68L.46,4.58c-.6-.57-.62-1.52-.05-2.12,.57-.6,1.52-.62,2.12-.05l7.41,7.09c1.39,1.39,1.39,3.61,.02,4.97Zm12.53,4.53H11.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5h11c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Z"
      />
    </IconWrapper>
  )
}

export const CodeIcon = (props: Props) => {
  return (
    <IconWrapper {...props}>
      <path
        fill="currentColor"
        d="M9,22c-.373,0-.746-.138-1.037-.416L1.342,15.256c-1.779-1.778-1.779-4.633-.024-6.388L7.955,2.424c.594-.576,1.544-.563,2.121,.031,.577,.594,.563,1.544-.031,2.121L3.424,11.005c-.268,.268-.424,.645-.424,1.045s.156,.777,.439,1.061l6.597,6.305c.599,.572,.62,1.521,.048,2.12-.295,.309-.689,.464-1.084,.464Zm7.046-.426l6.618-6.445c1.754-1.755,1.754-4.609-.023-6.387l-6.604-6.325c-.599-.575-1.548-.554-2.121,.045-.573,.598-.553,1.548,.045,2.121l6.58,6.303c.585,.585,.585,1.537,.015,2.108l-6.604,6.432c-.594,.578-.606,1.527-.028,2.121,.294,.302,.684,.453,1.075,.453,.377,0,.755-.142,1.046-.426Z"
      />
    </IconWrapper>
  )
}

export const WindowIcon = (props: Props) => {
  return (
    <IconWrapper {...props}>
      <path
        fill="currentColor"
        d="M24,8v-2c0-2.76-2.24-5-5-5H5C2.24,1,0,3.24,0,6v2H24Zm-4.5-5c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5Zm-4,0c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5Zm-4,0c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5Zm12.5,7v8c0,2.76-2.24,5-5,5H5c-2.76,0-5-2.24-5-5V10H24Z"
      />
    </IconWrapper>
  )
}

export const LeftCircleIcon = (props: Props) => {
  return (
    <IconWrapper {...props}>
      <path
        fill="currentColor"
        d="M24,12A12,12,0,1,0,12,24,12.013,12.013,0,0,0,24,12ZM8,12a2.993,2.993,0,0,1,.752-1.987c.291-.327.574-.637.777-.84L12.353,6.3a1,1,0,0,1,1.426,1.4L10.95,10.58c-.187.188-.441.468-.7.759a1,1,0,0,0,0,1.323c.258.29.512.57.693.752L13.779,16.3a1,1,0,0,1-1.426,1.4L9.524,14.822c-.2-.2-.48-.507-.769-.833A2.99,2.99,0,0,1,8,12Z"
      />
    </IconWrapper>
  )
}

export const LeftIcon = (props: Props) => {
  return (
    <IconWrapper {...props}>
      <path
        fill="currentColor"
        d="M17.921,1.505a1.5,1.5,0,0,1-.44,1.06L9.809,10.237a2.5,2.5,0,0,0,0,3.536l7.662,7.662a1.5,1.5,0,0,1-2.121,2.121L7.688,15.9a5.506,5.506,0,0,1,0-7.779L15.36.444a1.5,1.5,0,0,1,2.561,1.061Z"
      />
    </IconWrapper>
  )
}

export const MoonIcon = (props: Props) => {
  return (
    <IconWrapper {...props}>
      <path
        fill="currentColor"
        d="M15,24a12.021,12.021,0,0,1-8.914-3.966,11.9,11.9,0,0,1-3.02-9.309A12.122,12.122,0,0,1,13.085.152a13.061,13.061,0,0,1,5.031.205,2.5,2.5,0,0,1,1.108,4.226c-4.56,4.166-4.164,10.644.807,14.41a2.5,2.5,0,0,1-.7,4.32A13.894,13.894,0,0,1,15,24Z"
      />
    </IconWrapper>
  )
}

export const SunIcon = (props: Props) => {
  return (
    <IconWrapper {...props}>
      <path
        fill="currentColor"
        d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5,5-2.24,5-5-2.24-5-5-5Zm0,7c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Zm4.95-6.95c-.59-.59-.59-1.54,0-2.12l1.41-1.41c.59-.59,1.54-.59,2.12,0,.59,.59,.59,1.54,0,2.12l-1.41,1.41c-.29,.29-.68,.44-1.06,.44s-.77-.15-1.06-.44ZM7.05,16.95c.59,.59,.59,1.54,0,2.12l-1.41,1.41c-.29,.29-.68,.44-1.06,.44s-.77-.15-1.06-.44c-.59-.59-.59-1.54,0-2.12l1.41-1.41c.59-.59,1.54-.59,2.12,0ZM3.51,5.64c-.59-.59-.59-1.54,0-2.12,.59-.59,1.54-.59,2.12,0l1.41,1.41c.59,.59,.59,1.54,0,2.12-.29,.29-.68,.44-1.06,.44s-.77-.15-1.06-.44l-1.41-1.41Zm16.97,12.73c.59,.59,.59,1.54,0,2.12-.29,.29-.68,.44-1.06,.44s-.77-.15-1.06-.44l-1.41-1.41c-.59-.59-.59-1.54,0-2.12,.59-.59,1.54-.59,2.12,0l1.41,1.41Zm3.51-6.36c0,.83-.67,1.5-1.5,1.5h-2c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h2c.83,0,1.5,.67,1.5,1.5ZM3.5,13.5H1.5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5H3.5c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5ZM10.5,3.5V1.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5V3.5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5Zm3,17v2c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5v-2c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5Z"
      />
    </IconWrapper>
  )
}
