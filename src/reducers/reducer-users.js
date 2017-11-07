/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
  return [
    {
      id: 1,
      first: 'Bill 1',
      last: 'Murry',
      description: 'Your awesome!',
      thumbnail: 'http://www.fillmurray.com/300/320'
    },
    {
      id: 2,
      first: 'Bill 2',
      last: 'Murry',
      description: 'Wooooooooo',
      thumbnail: 'http://www.fillmurray.com/300/400'
    },
    {
      id: 3,
      first: 'Bill 3',
      last: 'Murry',
      description: 'Seriously!',
      thumbnail: 'http://www.fillmurray.com/300/470'
    }
  ]
}
