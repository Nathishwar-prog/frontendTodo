exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ 
      message: 'This is a placeholder API for local development only. In production, please use your deployed backend.',
      tasks: [
        {
          _id: '1',
          title: '1st task',
          description: 'This is a sample task',
          priority: 'Medium',
          status: 'Pending',
          createdAt: new Date().toISOString()
        },
        {
          _id: '2',
          title: 'Sample Task 2',
          description: 'This is another sample task',
          priority: 'High',
          status: 'Completed',
          createdAt: new Date().toISOString()
        }
      ]
    })
  };
};
