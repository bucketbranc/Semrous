import os, shutil, json
from time import sleep
from colorama import Fore, Style

def increment_version(version_str):
    parts = version_str.split('.')
    major, minor, patch = map(int, parts)
    
    patch += 1
    
    if patch > 99:
        patch = 0
        minor += 1
        
        if minor > 99:
            minor = 0
            major += 1
    
    return f"{major}.{minor}.{patch:02d}"
 
if os.path.exists("./dist"):
    shutil.rmtree("dist")
    print(f"{Fore.RED}Deleted {Style.BRIGHT}{Fore.LIGHTGREEN_EX}dist{Fore.RED}{Style.NORMAL} directory")
if os.path.exists("./out-tsc"):
    shutil.rmtree("out-tsc")
    print(f"{Fore.RED}Deleted {Style.BRIGHT}{Fore.LIGHTGREEN_EX}out-tsc{Fore.RED}{Style.NORMAL} directory")
manifest=[]
with open(os.getcwd() + "/manifest.json", 'r+') as file:
    manifest = json.loads(file.read())
    version = manifest['xeroversion']
    manifest['xeroversion'] = increment_version(version)
    file.seek(0)
    file.truncate()
    
    json.dump(manifest, file, indent=3)
    manifest['compiler'] = "PATATEDESILLON COMPILER"
    print(f"{Style.BRIGHT}{Fore.LIGHTGREEN_EX}manifest.json{Fore.RESET}{Fore.YELLOW} Updated {Style.DIM}Succesfully!{Fore.RESET}")

with open(os.getcwd() + "/Xero/config.ts", 'r+') as file:
    ata = file.read().replace('/**/', '"' + manifest['xeroversion'] + '"')
    file.seek(0)
    file.truncate()
    file.write(ata)
    print(f"{Style.BRIGHT}{Fore.LIGHTGREEN_EX}Xero/config.js{Fore.RESET}{Fore.YELLOW} Updated {Style.DIM}Succesfully!{Fore.RESET}")
    
os.system("bunx tsc")
print(f"{Fore.BLUE} Compiled {Style.DIM}{Fore.BLUE}Typescript{Fore.RESET}")

shutil.copytree(os.getcwd() + "/scr", os.getcwd() + "/dist")
shutil.copy(os.getcwd() + "/manifest.json", os.getcwd() + "/dist") 

print(f"{Fore.BLUE}Copied {Style.BRIGHT}{Fore.GREEN}manifest.json{Fore.RESET}{Fore.BLUE} To {Style.BRIGHT}{Fore.GREEN}dist{Fore.RESET}")

os.system("bunx webpack")
print(f"{Fore.BLUE}Bundeled {Style.DIM}{Fore.BLUE}Javascript{Fore.RESET}")
shutil.rmtree("out-tsc")
    