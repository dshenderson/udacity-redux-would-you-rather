let users = {
  bobafett: {
    id: 'bobafett',
    name: 'Boba Fett',
    avatarURL: '/avatars/bobafett.png',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  c3po: {
    id: 'c3po',
    name: 'C3PO',
    avatarURL: '/avatars/c3po.png',
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  chewbacca: {
    id: 'chewbacca',
    name: 'Chewbacca',
    avatarURL: '/avatars/chewbacca.png',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  },
  darthvader: {
    id: 'darthvader',
    name: 'Darth Vader',
    avatarURL: '/avatars/darthvader.png',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'bobafett',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['bobafett'],
      text: 'be frozen in carbon',
    },
    optionTwo: {
      votes: [],
      text: 'be fed alive to a sarlacc'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'darthvader',
    timestamp: 1468479767190,
    optionOne: {
      votes: ['darthvader'],
      text: 'join me so together we can rule the galaxy',
    },
    optionTwo: {
      votes: ['c3po'],
      text: 'lose your hand in a lightsaber duel'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'c3po',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'take one last look at your friends',
    },
    optionTwo: {
      votes: ['c3po', 'chewbacca'],
      text: 'let the Wookie win'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'chewbacca',
    timestamp: 1482579767190,
    optionOne: {
      votes: ['chewbacca'],
      text: 'visit Kashyyyk (the Wookiee planet)',
    },
    optionTwo: {
      votes: ['c3po'],
      text: 'visit Endor (the Ewok moon)'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'chewbacca',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['chewbacca'],
      text: 'pilot the Milennium Falcon',
    },
    optionTwo: {
      votes: ['darthvader'],
      text: 'command an Imperial Star Destroyer'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'darthvader',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['darthvader'],
      text: 'use a lightsaber',
    },
    optionTwo: {
      votes: ['chewbacca'],
      text: 'use a blaster'
    }
  },
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}

function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}
