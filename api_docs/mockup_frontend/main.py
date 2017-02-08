from falsy.falsy import FALSY

f = FALSY(static_path='test', static_dir='static')
f.swagger('frontend.yaml', ui=True)
api = f.api
