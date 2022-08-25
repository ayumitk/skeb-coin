import { Container, Logo } from '@/components'

export default function Footer() {
  return (
    <footer className="bg-neutral-50">
      <Container>
        <div className="py-16">
          <Logo className="mx-auto h-12 w-auto" />
        </div>
        <div className="flex flex-col items-center border-t border-neutral-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <a
              href="https://twitter.com/SkebCoin"
              className="group"
              aria-label="Skeb Coin on Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-neutral-500 group-hover:fill-neutral-700"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
              </svg>
              <span className="sr-only">Skeb Coin on Twitter</span>
            </a>
            <a
              href="https://medium.com/skeb-jp"
              className="group"
              aria-label="Skeb Coin on Medium"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                viewBox="0 0 640 640"
                fill="none"
                className="h-6 w-6 fill-neutral-500 group-hover:fill-neutral-700"
              >
                <path d="M180.5 138C80.813 138 0 219.371 0 319.738C0 420.105 80.819 501.476 180.5 501.476C280.181 501.476 361 420.111 361 319.738C361 219.365 280.191 138 180.5 138ZM468.75 148.646C418.905 148.646 378.505 225.265 378.505 319.741C378.505 414.217 418.911 490.841 468.756 490.841C518.601 490.841 559.007 414.222 559.007 319.741H559C559 225.238 518.6 148.646 468.752 148.646H468.75ZM608.256 166.467C590.73 166.467 576.521 235.095 576.521 319.741C576.521 404.387 590.721 473.015 608.256 473.015C625.791 473.015 640 404.369 640 319.738C640 235.089 625.785 166.467 608.258 166.467H608.256Z" />
              </svg>
              <span className="sr-only">Skeb Coin on Medium</span>
            </a>
          </div>
          <p className="mt-6 text-sm text-neutral-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Skeb Coin. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
