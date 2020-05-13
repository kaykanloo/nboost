from main import app 
from environs import Env
from timeit import default_timer as timer

def warmup(test_client, warmup_route):
    for i in range(10):
        test_client.get(warmup_route)

if __name__ == '__main__':
    env = Env()
    test_client = app.test_client()
    
    start = timer()
    warmup(test_client, env.str('WARMUP_ROUTE', '/travel/_search?pretty&q=passage:vegas&size=2'))
    end = timer()
    
    print(f'Warmup average query time: {(end - start) / 10}')    
