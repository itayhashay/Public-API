from http import client
import string
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
import logging, sys, chromedriver_autoinstaller, os.path ,re , asyncio

logging.basicConfig(stream=sys.stdout, level=logging.INFO)

class Browser:
    
    def __init__(self):
        chromedriver_autoinstaller.install()
        chrome_options = webdriver.ChromeOptions()
        options = [
            # Define window size here
            "window-size=1920,1080",
            "ignore-certificate-errors",
            "headless",
            #"disable-gpu",
            #'proxy-server=http://202.153.130.214:80'
            #"--window-size=1920,1200",
            #"--ignore-certificate-errors",
            #"--disable-extensions",
            #"--no-sandbox",
            #"--disable-dev-shm-usage",
            #'--remote-debugging-port=9222'
        ]
        for option in options:
            chrome_options.add_argument(option)
        self.driver = webdriver.Chrome(options=chrome_options)
    
    
    def setPage(self, page):
        self.driver.get(page)
        logging.info(page + " page set")
    
    
    def getScreenshotImage(self, name, path = "./"):
        element = self.driver.find_element(by=By.TAG_NAME, value='body')
        captchaImage=element.screenshot(path+name+".png")
        logging.info("Got scrrenshot at: "+ path+name+".png")
    
    
    def close(self):
        self.driver.close()

def getWebsiteName(name):
    try:
        name = name.split("https://")[1].split("/")[0]
        return name
    except Exception as e:
        return name

def fixPath(path):
    if path[-1] != "/":
        return path+"/"
    return path

def imageExists(path, name):
    if os.path.isfile(path+name+".png"):
        logging.info(f"{name}.png exists")
        return True
    else:
        logging.info(f"{name}.png not exists")
        return False
    
def getScreenShot(client, url, path="./"):
    path = fixPath(path)
    name = getWebsiteName(url)
    if imageExists(path, name):
        return
    client.setPage(url)
    client.getScreenshotImage(name,path)

def getUrlsFromReadme(path):
    isUrl = r'(https?://[^\s]+)'
    f = open(path)
    return(re.findall(isUrl,f.read().replace(")"," ")))
    f.close()

def request():
    client = Browser()
    for url in getUrlsFromReadme('.\ALLURL.txt'):
        try:
            getScreenShot(client,url,"./Script/img")
        except Exception as e:
            logging.error(e)
            time.sleep(2)
        

        
    client.close()

def main():
    request()

if __name__ == '__main__':
    main()

