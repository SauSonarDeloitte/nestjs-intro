'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-4493966a46fc5492d761a48b27d897fa64c0546caec06ab0bb80e39d1e4a2fd3cbdec240a39de6defc990798cbe38b7f070aba39b0c30f226400299e4ea53576"' : 'data-bs-target="#xs-controllers-links-module-AppModule-4493966a46fc5492d761a48b27d897fa64c0546caec06ab0bb80e39d1e4a2fd3cbdec240a39de6defc990798cbe38b7f070aba39b0c30f226400299e4ea53576"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-4493966a46fc5492d761a48b27d897fa64c0546caec06ab0bb80e39d1e4a2fd3cbdec240a39de6defc990798cbe38b7f070aba39b0c30f226400299e4ea53576"' :
                                            'id="xs-controllers-links-module-AppModule-4493966a46fc5492d761a48b27d897fa64c0546caec06ab0bb80e39d1e4a2fd3cbdec240a39de6defc990798cbe38b7f070aba39b0c30f226400299e4ea53576"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-4493966a46fc5492d761a48b27d897fa64c0546caec06ab0bb80e39d1e4a2fd3cbdec240a39de6defc990798cbe38b7f070aba39b0c30f226400299e4ea53576"' : 'data-bs-target="#xs-injectables-links-module-AppModule-4493966a46fc5492d761a48b27d897fa64c0546caec06ab0bb80e39d1e4a2fd3cbdec240a39de6defc990798cbe38b7f070aba39b0c30f226400299e4ea53576"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-4493966a46fc5492d761a48b27d897fa64c0546caec06ab0bb80e39d1e4a2fd3cbdec240a39de6defc990798cbe38b7f070aba39b0c30f226400299e4ea53576"' :
                                        'id="xs-injectables-links-module-AppModule-4493966a46fc5492d761a48b27d897fa64c0546caec06ab0bb80e39d1e4a2fd3cbdec240a39de6defc990798cbe38b7f070aba39b0c30f226400299e4ea53576"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-9ac0c05b168b5b2be729d24077d7a4890748806092ecbfa295d765f2a76eef77df3ea800029af05f9e0cce8684cb39c5dfd941bdfa3c4f16ea28a7560e95102e"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-9ac0c05b168b5b2be729d24077d7a4890748806092ecbfa295d765f2a76eef77df3ea800029af05f9e0cce8684cb39c5dfd941bdfa3c4f16ea28a7560e95102e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-9ac0c05b168b5b2be729d24077d7a4890748806092ecbfa295d765f2a76eef77df3ea800029af05f9e0cce8684cb39c5dfd941bdfa3c4f16ea28a7560e95102e"' :
                                            'id="xs-controllers-links-module-AuthModule-9ac0c05b168b5b2be729d24077d7a4890748806092ecbfa295d765f2a76eef77df3ea800029af05f9e0cce8684cb39c5dfd941bdfa3c4f16ea28a7560e95102e"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-9ac0c05b168b5b2be729d24077d7a4890748806092ecbfa295d765f2a76eef77df3ea800029af05f9e0cce8684cb39c5dfd941bdfa3c4f16ea28a7560e95102e"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-9ac0c05b168b5b2be729d24077d7a4890748806092ecbfa295d765f2a76eef77df3ea800029af05f9e0cce8684cb39c5dfd941bdfa3c4f16ea28a7560e95102e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-9ac0c05b168b5b2be729d24077d7a4890748806092ecbfa295d765f2a76eef77df3ea800029af05f9e0cce8684cb39c5dfd941bdfa3c4f16ea28a7560e95102e"' :
                                        'id="xs-injectables-links-module-AuthModule-9ac0c05b168b5b2be729d24077d7a4890748806092ecbfa295d765f2a76eef77df3ea800029af05f9e0cce8684cb39c5dfd941bdfa3c4f16ea28a7560e95102e"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-3a42c2a160b733c00796b7e02f6be798b2e13e880c2ebe99df2c9b113744c1a0e117ae087fdf6f5ede53fa384f453399872c061a30f9ffbedb8111614c47a5e4"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-3a42c2a160b733c00796b7e02f6be798b2e13e880c2ebe99df2c9b113744c1a0e117ae087fdf6f5ede53fa384f453399872c061a30f9ffbedb8111614c47a5e4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-3a42c2a160b733c00796b7e02f6be798b2e13e880c2ebe99df2c9b113744c1a0e117ae087fdf6f5ede53fa384f453399872c061a30f9ffbedb8111614c47a5e4"' :
                                            'id="xs-controllers-links-module-PostsModule-3a42c2a160b733c00796b7e02f6be798b2e13e880c2ebe99df2c9b113744c1a0e117ae087fdf6f5ede53fa384f453399872c061a30f9ffbedb8111614c47a5e4"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-3a42c2a160b733c00796b7e02f6be798b2e13e880c2ebe99df2c9b113744c1a0e117ae087fdf6f5ede53fa384f453399872c061a30f9ffbedb8111614c47a5e4"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-3a42c2a160b733c00796b7e02f6be798b2e13e880c2ebe99df2c9b113744c1a0e117ae087fdf6f5ede53fa384f453399872c061a30f9ffbedb8111614c47a5e4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-3a42c2a160b733c00796b7e02f6be798b2e13e880c2ebe99df2c9b113744c1a0e117ae087fdf6f5ede53fa384f453399872c061a30f9ffbedb8111614c47a5e4"' :
                                        'id="xs-injectables-links-module-PostsModule-3a42c2a160b733c00796b7e02f6be798b2e13e880c2ebe99df2c9b113744c1a0e117ae087fdf6f5ede53fa384f453399872c061a30f9ffbedb8111614c47a5e4"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-1128f7a9f6b4ce7850c677bdcc7b3cc63b2e0e99d49fc1b62310fa1e5a0b64b3603b94ef6f1e31549022339e9ed2759ba2df0c9e700c7cf28e193c0bb2e45a18"' : 'data-bs-target="#xs-controllers-links-module-UserModule-1128f7a9f6b4ce7850c677bdcc7b3cc63b2e0e99d49fc1b62310fa1e5a0b64b3603b94ef6f1e31549022339e9ed2759ba2df0c9e700c7cf28e193c0bb2e45a18"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-1128f7a9f6b4ce7850c677bdcc7b3cc63b2e0e99d49fc1b62310fa1e5a0b64b3603b94ef6f1e31549022339e9ed2759ba2df0c9e700c7cf28e193c0bb2e45a18"' :
                                            'id="xs-controllers-links-module-UserModule-1128f7a9f6b4ce7850c677bdcc7b3cc63b2e0e99d49fc1b62310fa1e5a0b64b3603b94ef6f1e31549022339e9ed2759ba2df0c9e700c7cf28e193c0bb2e45a18"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-1128f7a9f6b4ce7850c677bdcc7b3cc63b2e0e99d49fc1b62310fa1e5a0b64b3603b94ef6f1e31549022339e9ed2759ba2df0c9e700c7cf28e193c0bb2e45a18"' : 'data-bs-target="#xs-injectables-links-module-UserModule-1128f7a9f6b4ce7850c677bdcc7b3cc63b2e0e99d49fc1b62310fa1e5a0b64b3603b94ef6f1e31549022339e9ed2759ba2df0c9e700c7cf28e193c0bb2e45a18"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-1128f7a9f6b4ce7850c677bdcc7b3cc63b2e0e99d49fc1b62310fa1e5a0b64b3603b94ef6f1e31549022339e9ed2759ba2df0c9e700c7cf28e193c0bb2e45a18"' :
                                        'id="xs-injectables-links-module-UserModule-1128f7a9f6b4ce7850c677bdcc7b3cc63b2e0e99d49fc1b62310fa1e5a0b64b3603b94ef6f1e31549022339e9ed2759ba2df0c9e700c7cf28e193c0bb2e45a18"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostsDto.html" data-type="entity-link" >PatchPostsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDto.html" data-type="entity-link" >UserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});