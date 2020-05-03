from main import app 
from timeit import default_timer as timer

def test(test_client):
    for i in range(10):
        test_client.get('/travel/_search?pretty&q=passage:vegas&size=2')

if __name__ == '__main__':
    
    test_client = app.test_client()
    
    start = timer()
    test(test_client)
    end = timer()
    
    print(f'Time: {(end - start) / 10}')    
