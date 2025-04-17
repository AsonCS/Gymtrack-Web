'use client'

import { useEffect } from 'react'

import { feExerciseRepository } from '@/data/frontend'

export default function Test() {
    useEffect(() => {
        try {
            feExerciseRepository()
                .getExercises()
                .catch((error) => {
                    console.error(error)
                })
        } catch (e) {
            console.error(e)
        }
    }, [])
    return <div>Test</div>
}
