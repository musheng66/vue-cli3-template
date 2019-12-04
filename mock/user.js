
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: '/img/logo.jpg',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: '/img/logo.jpg',
    name: 'Normal Editor'
  }
}

export default [
  // user login
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          returnCode: 402,
          returnMsg: 'Account and password are incorrect.'
        }
      }

      return {
        returnCode: 200,
        returnData: token
      }
    }
  },

  // get user info
  {
    url: '/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          returnCode: 20011,
          returnMsg: 'Unable to get user details.'
        }
      }

      return {
        returnCode: 200,
        returnData: info
      }
    }
  },

  // user logout
  {
    url: '/user/logout',
    type: 'post',
    response: _ => {
      return {
        returnCode: 200,
        returnData: 'success'
      }
    }
  }
]
