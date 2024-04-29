import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'Astro',
        name: 'Astro H.',
        isFollowing: true
    },
    {
        userName: 'Daniel',
        name: 'Daniel C.',
        isFollowing: false
    },
    {
        userName: 'Santiago',
        name: 'Santiago A.',
        isFollowing: true
    },
    {
        userName: 'Simon',
        name: 'Simon B.',
        isFollowing: false
    },
]


export function App () {
    return (
      <section className='App'>
        {
          users.map(({ userName, name, isFollowing }) => (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          ))
        }
      </section>
    )
  }