import React from 'react';

interface Props {
  name: string;
  price: string;
  image: string;
  account: any;
  buyNft: (args: any) => void;
  nft: any;
}

const SingleItem: React.FC<Props> = ({
  name,
  price,
  image,
  account,
  buyNft,
  nft,
}) => {
  return (
    <article>
      <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 block rounded-[1.25rem] border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
        <figure className="relative">
          <a href="item.html">
            <img
              src={image}
              alt="item 5"
              className="w-full rounded-[0.625rem]"
              style={{ height: '300px' }}
              loading="lazy"
            />
          </a>
          <div className="absolute flex items-center p-2 space-x-1 bg-white rounded-md dark:bg-jacarta-700 top-3 right-3">
            <span
              className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
              data-tippy-content="Favorite"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red"
              >
                <path fill="none" d="M0 0H24V24H0z" />
                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
              </svg>
            </span>
            <span className="text-sm dark:text-jacarta-200">15</span>
          </div>
          <div className="absolute left-3 -bottom-3">
            <div className="flex -space-x-2">
              <div>
                <img
                  src="img/avatars/creator_1.png"
                  alt="creator"
                  className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent"
                  data-tippy-content="Creator: Sussygirl"
                />
              </div>
              <div>
                <img
                  src="img/avatars/owner_1.png"
                  alt="owner"
                  className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent"
                  data-tippy-content="Owner: Sussygirl"
                />
              </div>
            </div>
          </div>
        </figure>
        <div className="flex items-center justify-between mt-7">
          <a href="item.html">
            <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">
              {name}
            </span>
          </a>
        </div>
        <div className="mt-2 text-sm">
          <span className="mr-1 dark:text-jacarta-200 text-jacarta-700">
            {price} ETH
          </span>
        </div>
        {account && (
          <div className="flex items-center justify-between mt-8">
            <button
              className="text-sm font-semibold text-accent font-display"
              data-bs-toggle="modal"
              onClick={() => buyNft(nft)}
            >
              Buy now
            </button>
          </div>
        )}
      </div>
    </article>
  );
};

export default SingleItem;
