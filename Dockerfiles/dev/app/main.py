import os
from pathlib import Path
from environs import Env
import nboost
from nboost.proxy import Proxy

def add_nboost_path_prefix(rel_path=''):
    return str(Path(nboost.__file__).parent.joinpath(rel_path))

env = Env()
args = {
    'nboost_dir' : env.str("NBOOST_DIR", add_nboost_path_prefix('')),
    'debug' : env.bool("DEBUG", False),
    'no_rerank' : env.bool('NO_RERANK', False),
    'search_route' : env.str('SEARCH_ROUTE', '/<index>/_search'),
    'query_path' : env.str('QUERY_PATH', '(body.query.match) | (body.query.term.*) | (url.query.q)'),
    'topk_path' : env.str('TOPK_PATH', '(body.size) | (url.query.size)'),
    'default_topk' : env.int('DEFAULT_TOPK', 10),
    'cvalues_path' : env.str('CVALUES_PATH', '_source.*'),
    'cids_path' : env.str('CIDS_PATH','_id'),
    'choices_path' : env.str('CHOICES_PATH', 'body.hits.hits'),
    'query_prep' : env.str('QUERY_PREP', 'lambda query: query'),
    'verbose' : env.bool('VERBOSE', False),
    'host' : env.str('HOST', '0.0.0.0'),
    'port' : env.int('PORT', 8000),
    'uhost' : env.str('UHOST', '0.0.0.0'),
    'uport' : env.int('UPORT', 9200),
    'ussl' : env.bool('USSL', False),
    'delim' : env.str('DELIM', '. '),
    'max_seq_len' : env.int('MAX_SEQ_LEN', 64),
    'bufsize' : env.int('BUFSIZE', default = 2048),
    'batch_size' : env.int('BATCH_SIZE', 4),
    'topn' : env.int('TOPN', 50),
    'workers' : env.int('WORKERS', 10),
    'data_dir' : env.str('DATA_DIR', add_nboost_path_prefix('.cache')),
    'model' : env.str('MODEL', 'PtTransformersRerankPlugin'),
    'model_dir' : env.str('MODEL_DIR', 'nboost/pt-tinybert-msmarco'),
    'qa' : env.bool('QA', False),
    'qa_model' : env.str('QA_MODEL', 'PtDistilBertQAModelPlugin'),
    'qa_model_dir' : env.str('QA_MODEL_DIR', 'distilbert-base-uncased-distilled-squad'),
    'filter_results' : env.bool('FILTER_RESULTS', False)
}

proxy = Proxy(**args)
app = proxy.wsgi_app

if __name__ == '__main__':
    proxy.run()