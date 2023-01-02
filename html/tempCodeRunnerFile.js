h + 'chat_history.txt', 'utf-8', (err, data) => {
      if (err) throw err
      console.log(data)
    })