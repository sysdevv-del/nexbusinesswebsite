import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://nexbusiness.id";
const DEFAULT_IMAGE = `${BASE_URL}/images/hero-team.jpg`;
const SITE_NAME = "NexBusiness";

/**
 * SEOHead - Dynamically updates <head> meta tags for each page (SPA-friendly).
 * 
 * @param {string} title - Page title (will be appended with site name)
 * @param {string} description - Meta description for the page
 * @param {string} [image] - Open Graph image URL
 * @param {string} [type] - OG type (defaults to "website")
 * @param {string} [canonical] - Override canonical URL
 */
export default function SEOHead({
    title,
    description,
    image = DEFAULT_IMAGE,
    type = "website",
    canonical,
    noAppend = false
}) {
    const location = useLocation();
    const fullTitle = noAppend ? title : `${title} | ${SITE_NAME}`;
    const canonicalUrl = canonical || `${BASE_URL}${location.pathname}`;
    const imageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;

    useEffect(() => {
        // Title
        document.title = fullTitle;

        // Meta Description
        updateMeta("description", description);

        // Canonical
        updateLink("canonical", canonicalUrl);

        // Open Graph
        updateMeta("og:title", fullTitle, "property");
        updateMeta("og:description", description, "property");
        updateMeta("og:url", canonicalUrl, "property");
        updateMeta("og:image", imageUrl, "property");
        updateMeta("og:type", type, "property");
        updateMeta("og:site_name", SITE_NAME, "property");

        // Twitter Card
        updateMeta("twitter:title", fullTitle);
        updateMeta("twitter:description", description);
        updateMeta("twitter:image", imageUrl);
        updateMeta("twitter:card", "summary_large_image");
    }, [fullTitle, description, canonicalUrl, imageUrl, type]);

    return null;
}

function updateMeta(name, content, attr = "name") {
    if (!content) return;
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
    }
    el.setAttribute("content", content);
}

function updateLink(rel, href) {
    if (!href) return;
    let el = document.querySelector(`link[rel="${rel}"]`);
    if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
    }
    el.setAttribute("href", href);
}
