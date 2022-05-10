import React, { useState, useEffect } from 'react'
// import gif from '../../content/assets/lastfm-nowPlaying.gif'
import * as styles from './lastFmData.module.css'
import soundBars from '../images/soundbars.gif'

export const LastFmData = () => {
  const [lfmData, updateLfmData] = useState({})

  useEffect(() => {
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=swoephowx&api_key=8d1394415d95c0771ac9f8247cc7ee17&limit=1&nowplaying=true&format=json`
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('error')
      })
      .then((data) => updateLfmData(data))
      .catch(() =>
        updateLfmData({
          error: 'Hubo un error al fetchear del API de Last.FM...',
        })
      )
  }, [])

  const buildLastFmData = () => {
    const { error } = lfmData
    const track = lfmData?.recenttracks?.track

    if (error) {
      return (
        <p
          style={{ color: 'rgba(255, 255, 255, 0.308)' }}
          className={styles.wrapper}
        >
          {error}
        </p>
      )
    }

    if (!track) {
      return (
        <p
          style={{ color: 'rgba(255, 255, 255, 0.308)' }}
          className={styles.wrapper}
        >
          Loading from Last.FM servers...
        </p>
      )
    }

    const [
      { name: songName, artist: { '#text': artistName } = {} } = {},
    ] = track

    return (
      <div className={styles.wrapper}>
        <p className={styles.nowListening} style={{marginBottom: '0.2rem'}}>Listening now to:</p>
        <p className={styles.artistName}>
          {songName} <span className={styles.nowListening}>by</span>{' '}
          {artistName}
          <img style={{marginLeft: '0.5rem'}} src={soundBars} alt="Sound bars" className={styles.soundBars} />
        </p>

      </div>
    )
  }
  return buildLastFmData()
}

export default LastFmData